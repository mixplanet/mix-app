import { DomNode, el } from "@hanul/skynode";
import { constants, utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import CommonUtil from "../../CommonUtil";
import MateList from "../../component/mate/MateList";
import Config from "../../Config";
import MixEmitterContract from "../../contracts/mix/MixEmitterContract";
import MatesListenersContract from "../../contracts/turntable/MatesListenersContract";
import TurntableExtrasContract from "../../contracts/turntable/TurntableExtrasContract";
import TurntablesContract from "../../contracts/turntable/TurntablesContract";
import Klaytn from "../../klaytn/Klaytn";
import Wallet from "../../klaytn/Wallet";
import turntables from "../../turntables.json";
import Prompt from "../../component/dialogue/Prompt";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";
import LPTokenListenersV2 from "../../component/turntable/LPTokenListenersV2";
import KlayMIXListenersContractV2 from "../../contracts/turntable/KlayMIXListenersContractV2";
import KSPMIXListenersContractV2 from "../../contracts/turntable/KSPMIXListenersContractV2";

export default class Detail implements View {

    private container: DomNode;
    private title: DomNode;
    private infoDisplay: DomNode;
    private controller: DomNode;
    private controller2: DomNode;
    private mateRewardInfo: DomNode;
    private listeningMateList: MateList;

    constructor(params: ViewParams) {
        const turntableId = parseInt(params.id, 10);
        Layout.current.title = `턴테이블 #${turntableId}`;
        Layout.current.content.append(this.container = el(".turntable-detail-view",
            this.title = el("h1", `턴테이블 #${turntableId}`),
            this.infoDisplay = el(".info"),
            this.controller = el(".controller"),
            this.controller2 = el(".controller2"),
            el("section",
                el("h2", "리스닝 메이트"),
                el("button", "MIX 수령받기", { click: () => ViewUtil.go(`/turntable/${turntableId}/miningmates`) }),
                this.mateRewardInfo = el(".mate-reward-info"),
                this.listeningMateList = new MateList(false, false),
            ),
            el(".controller",
                el("button.add-mates-button", "메이트 등록", {
                    click: () => ViewUtil.go(`/turntable/${turntableId}/addmates`),
                }),
                el("button.remove-mates-button", "메이트 제외", {
                    click: () => ViewUtil.go(`/turntable/${turntableId}/removemates`),
                }),
            ),
            el("a.mate-holders-button", "메이트 홀더 지갑 보기", {
                click: () => ViewUtil.go(`/turntable/${turntableId}/mateholders`),
            }),
            el("section",
                el("h2", "리스닝 LP 토큰"),
                el("p.warning", "LP 토큰을 리스너로 등록할 수 있습니다. 리스너로 등록된 동안에는 Klayswap 에어드롭 풀로부터 MIX를 분배받을 수 없습니다. 따라서 반드시 Klayswap 에어드롭 풀과 수익률을 비교하시기 바랍니다."),
                el(".listeners",
                    new LPTokenListenersV2(
                        "Klay-MIX Listeners V2",
                        KlayMIXListenersContractV2,
                        turntableId,
                        14,
                    ),
                    new LPTokenListenersV2(
                        "KSP-MIX Listeners V2",
                        KSPMIXListenersContractV2,
                        turntableId,
                        15,
                    ),
                ),
            ),
        ));
        this.loadInfo(turntableId);
        this.loadListeningMates(turntableId);
    }

    private async loadInfo(turntableId: number) {
        const currentBlock = await Klaytn.loadBlockNumber();
        const walletAddress = await Wallet.loadAddress();

        const turntable = await TurntablesContract.turntables(turntableId);
        if (turntable.owner === constants.AddressZero) {
            this.infoDisplay.empty().appendText("폐쇄된 턴테이블입니다.");
        } else {
            const lifetime = turntable.endBlock - currentBlock;
            const claimable = await TurntablesContract.claimableOf(turntableId);

            const extra = await TurntableExtrasContract.extras(turntableId);
            let data: any = {};
            try { data = JSON.parse(extra); } catch (e) { console.error(e); }

            if (data.name !== undefined) {
                Layout.current.title = data.name;
                this.title.empty().appendText(data.name);
            }

            const turntableType = turntables[turntable.typeId];
            this.infoDisplay.empty().append(
                el("img", { src: turntableType.img }),
                el(".volume", `Volume: ${CommonUtil.numberWithCommas(String(turntableType.volume))}`),
            );

            if (data.bgm !== undefined) {
                let bgm = data.bgm;
                const v = bgm.indexOf("?v=");
                if (v !== -1) {
                    bgm = `https://www.youtube.com/embed/${bgm.substring(v + 3)}`;
                } else if (bgm.indexOf("https://youtu.be/") === 0) {
                    bgm = `https://www.youtube.com/embed/${bgm.substring(17)}`;
                }
                this.infoDisplay.append(
                    el("iframe.video", {
                        height: "200",
                        src: bgm,
                        title: "YouTube video player",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    }),
                );
            }
            if (data.description !== undefined) {
                this.infoDisplay.append(
                    el("p", data.description),
                );
            }
            if (data.kakaotalk !== undefined) {
                this.infoDisplay.append(
                    el(".social", "- 카카오톡 : ", el("a", data.kakaotalk, { href: data.kakaotalk, target: "_blank" })),
                );
            }
            if (data.twitter !== undefined) {
                this.infoDisplay.append(
                    el(".social", "- 트위터 : ", el("a", data.twitter, {
                        href: data.twitter[0] === "@" ? `https://twitter.com/${data.twitter.substring(1)}` : data.twitter,
                        target: "_blank",
                    })),
                );
            }

            this.infoDisplay.append(
                el(".owner", `- 소유자: ${turntable.owner}`),
                turntable.owner !== walletAddress ? undefined : el(".mix", `- 쌓인 MIX: ${CommonUtil.numberWithCommas(utils.formatEther(claimable), 5)}`),
                el(".lifetime", `- Lifetime: ${CommonUtil.numberWithCommas(String(lifetime < 0 ? 0 : lifetime))} Blocks`),
            );

            if (turntable.owner === walletAddress) {

                this.controller.empty().append(
                    el("button.charge-button", "충전하기", {
                        click: () => {
                            /*new Prompt("충전하기", "얼마만큼의 MIX를 충전하시겠습니까? 배터리 충전 가격은 턴테이블의 가격의 1/5와 비례하며, 턴테이블의 가격과 같은 액수의 MIX로 배터리를 충전하면 턴테이블 수명의 5배의 수명이 더해집니다.", "충전하기", async (amount) => {
                                const mix = utils.parseEther(amount);
                                await TurntablesContract.charge(turntableId, mix);
                                ViewUtil.waitTransactionAndRefresh();
                            });*/
                            alert("턴테이블 충전이 종료되었습니다.");
                        },
                    }),
                    el("button.update-button", "수정하기", { click: () => ViewUtil.go(`/turntable/${turntableId}/update`) }),
                );

                this.controller2.empty().append(
                    el("button.claim-button", "MIX 수령", { click: () => TurntablesContract.claim([turntableId]) }),
                );
            }
        }
    }

    private async loadListeningMates(turntableId: number) {

        const poolInfo = await MixEmitterContract.poolInfo(Config.isTestnet === true ? 4 : 9);
        const tokenPerDay = poolInfo.allocPoint / 10000 / 2 * 86400 * 0.7;
        const totalShares = (await MatesListenersContract.totalShares()).toNumber();
        this.mateRewardInfo.empty().append(
            el("p", `메이트 1개당 하루에 받는 MIX 수량: ${CommonUtil.numberWithCommas(String(tokenPerDay / totalShares))}`)
        );

        const mateBalance = (await MatesListenersContract.listenerCount(turntableId)).toNumber();

        const mates: number[] = [];

        const promises: Promise<void>[] = [];
        for (let i = 0; i < mateBalance; i += 1) {
            const promise = async (index: number) => {
                const mateId = (await MatesListenersContract.listeners(turntableId, index)).toNumber();
                mates.push(mateId);
            };
            promises.push(promise(i));
        }
        await Promise.all(promises);

        this.listeningMateList.load(mates);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
