import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import superagent from "superagent";
import CommonUtil from "../../CommonUtil";
import MixContract from "../../contracts/mix/MixContract";
import MixEmitterContract from "../../contracts/mix/MixEmitterContract";
import TurntableKIP7ListenersContract from "../../contracts/turntable/TurntableKIP7ListenersContract";
import Wallet from "../../klaytn/Wallet";
import Prompt from "../../component/dialogue/Prompt";
import ViewUtil from "../../view/ViewUtil";

export default class LPTokenListeners extends DomNode {

    constructor(
        name: string,
        private contract: TurntableKIP7ListenersContract,
        private turntableId: number,
        private poolId: number,
        private lpPoolId: number,
    ) {
        super(".lp-token-listeners");
        this.append(
            el("h4", name),
        );
        this.load();
    }

    private async load() {

        const poolInfo = await MixEmitterContract.poolInfo(this.poolId);
        const tokenPerBlock = poolInfo.allocPoint / 10000 / 2 * 0.7;

        const lpPoolInfo = await MixEmitterContract.poolInfo(this.lpPoolId);
        const lpTotalSupply = await this.contract.lpToken.getTotalSupply();
        const totalShares = await this.contract.totalShares();
        const tokenPerBlockToLP = lpPoolInfo.allocPoint / 10000 / 2 * 0.7 * totalShares.mul(1000000).div(lpTotalSupply).toNumber() / 1000000;

        const blocksPerYear = 365 * 24 * 60 * 60;

        try {
            const result = await superagent.get("https://api.dogesound.club/mix/price");
            const mixPrice = utils.parseEther(result.text);

            const totalMixInLP = await MixContract.balanceOf(this.contract.lpToken.address);
            const stakingTokenPrice = totalMixInLP.mul(mixPrice).mul(2).div(lpTotalSupply);

            const totalRewardPricePerYear = mixPrice.mul(Math.round((tokenPerBlock + tokenPerBlockToLP) * blocksPerYear));
            const totalStakingTokenInPool = totalShares.mul(stakingTokenPrice).div(utils.parseEther("1"));

            const apr = totalStakingTokenInPool.eq(0) === true ? 0 : totalRewardPricePerYear.mul(10000).div(totalStakingTokenInPool).toNumber() / 100;

            this.append(
                el(".total-lp", `??? LP: ${CommonUtil.numberWithCommas(utils.formatEther(totalShares))}`),
                el(".apr", `APR: ${apr}%`),
            );
        } catch (e) {
            console.error(e);
            this.append(
                el(".total-lp", `??? LP: ${CommonUtil.numberWithCommas(utils.formatEther(totalShares))}`),
                el(".apr", "APR: ?????? ????????? ??????????????? ??????????????????."),
            );
        }

        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {
            const share = await this.contract.shares(this.turntableId, walletAddress);
            const lpBalance = await this.contract.lpToken.balanceOf(walletAddress);
            const reward = await this.contract.claimableOf(this.turntableId, walletAddress);
            this.append(
                el(".staking-lp", `?????? ?????? LP: ${CommonUtil.numberWithCommas(utils.formatEther(share))}`),
                el(".my-lp", `?????? ?????? LP: ${CommonUtil.numberWithCommas(utils.formatEther(lpBalance))}`),
                el(".amount", `?????? MIX: ${CommonUtil.numberWithCommas(utils.formatEther(reward))}`),
                el("a", "LP ?????? ????????? ??????", {
                    click: () => {
                        new Prompt("LP ?????? ????????? ??????", "??????????????? LP ????????? ?????????????????????????", "????????????", async (amount) => {
                            const lp = utils.parseEther(amount);
                            await this.contract.listen(this.turntableId, lp);
                            ViewUtil.waitTransactionAndRefresh();
                        });
                    },
                }),
                el("a", "LP ?????? ????????? ?????? ??????", {
                    click: () => {
                        new Prompt("LP ?????? ????????? ??????", "??????????????? LP ????????? ?????? ?????????????????????????", "?????? ??????", async (amount) => {
                            const lp = utils.parseEther(amount);
                            await this.contract.unlisten(this.turntableId, lp);
                            ViewUtil.waitTransactionAndRefresh();
                        });
                    },
                }),
                el("a", "MIX ?????? ??????", {
                    click: async () => {
                        await this.contract.unlisten(this.turntableId, 0);
                    },
                }),
                el("a", "MIX ??????", {
                    click: async () => {
                        await this.contract.claim(this.turntableId);
                        ViewUtil.waitTransactionAndRefresh();
                    },
                }),
                el("p.warning", "* MIX ?????? ????????? ?????? ???????????? ???, MIX ????????? ??????????????????."),
            );
        }
    }
}
