"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const superagent_1 = __importDefault(require("superagent"));
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const Config_1 = __importDefault(require("../../Config"));
const MixContract_1 = __importDefault(require("../../contracts/mix/MixContract"));
const MixEmitterContract_1 = __importDefault(require("../../contracts/mix/MixEmitterContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const Prompt_1 = __importDefault(require("../../component/dialogue/Prompt"));
const ViewUtil_1 = __importDefault(require("../../view/ViewUtil"));
class LPTokenListenersV2 extends skynode_1.DomNode {
    constructor(name, contract, turntableId, poolId) {
        super(".lp-token-listeners");
        this.contract = contract;
        this.turntableId = turntableId;
        this.poolId = poolId;
        this.append((0, skynode_1.el)("h4", name));
        this.load();
    }
    async load() {
        const poolInfo = await MixEmitterContract_1.default.poolInfo(this.poolId);
        const tokenPerBlock = poolInfo.allocPoint / 10000 / 2 * 0.7;
        const lpTotalSupply = await this.contract.lpToken.getTotalSupply();
        const totalShares = await this.contract.totalShares();
        const blocksPerYear = 365 * 24 * 60 * 60;
        try {
            const result = await superagent_1.default.get("https://api.dogesound.club/mix/price");
            const mixPrice = ethers_1.utils.parseEther(result.text);
            const totalMixInLP = await MixContract_1.default.balanceOf(this.contract.lpToken.address);
            const stakingTokenPrice = totalMixInLP.mul(mixPrice).mul(2).div(lpTotalSupply);
            const totalRewardPricePerYear = mixPrice.mul(Math.round((tokenPerBlock) * blocksPerYear));
            const totalStakingTokenInPool = totalShares.mul(stakingTokenPrice).div(ethers_1.utils.parseEther("1"));
            const apr = totalStakingTokenInPool.eq(0) === true ? 0 : totalRewardPricePerYear.mul(10000).div(totalStakingTokenInPool).toNumber() / 100;
            this.append((0, skynode_1.el)(".total-lp", `??? LP: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(totalShares))}`), (0, skynode_1.el)(".apr", `?????? APR: +${apr}%`));
        }
        catch (e) {
            console.error(e);
            this.append((0, skynode_1.el)(".total-lp", `??? LP: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(totalShares))}`), (0, skynode_1.el)(".apr", "?????? APR: ?????? ????????? ??????????????? ??????????????????."));
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const share = await this.contract.shares(this.turntableId, walletAddress);
            const lpBalance = await this.contract.lpToken.balanceOf(walletAddress);
            const mixReward = await this.contract.claimableOf(this.turntableId, walletAddress, Config_1.default.contracts.Mix);
            const kspReward = await this.contract.claimableOf(this.turntableId, walletAddress, Config_1.default.contracts.KSP);
            const punkReward = await this.contract.claimableOf(this.turntableId, walletAddress, Config_1.default.contracts.NewKlayPunk);
            this.append((0, skynode_1.el)(".staking-lp", `?????? ?????? LP: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(share))}`), (0, skynode_1.el)(".my-lp", `?????? ?????? LP: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(lpBalance))}`), (0, skynode_1.el)(".amount", `?????? MIX: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(mixReward))}`), (0, skynode_1.el)(".amount", `?????? KSP: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(kspReward))}`), (0, skynode_1.el)(".amount", `?????? PUNK: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(punkReward))}`), (0, skynode_1.el)("a", "?????? ?????? ?????????", {
                click: async () => {
                    await this.contract.unlisten(this.turntableId, 0);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                },
            }), (0, skynode_1.el)("a", "LP ?????? ????????? ??????", {
                click: () => {
                    new Prompt_1.default("LP ?????? ????????? ??????", "??????????????? LP ????????? ?????????????????????????", "????????????", async (amount) => {
                        const lp = ethers_1.utils.parseEther(amount);
                        await this.contract.listen(this.turntableId, lp);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    });
                },
            }), (0, skynode_1.el)("a", "LP ?????? ????????? ?????? ??????", {
                click: () => {
                    new Prompt_1.default("LP ?????? ????????? ??????", "??????????????? LP ????????? ?????? ?????????????????????????", "?????? ??????", async (amount) => {
                        const lp = ethers_1.utils.parseEther(amount);
                        await this.contract.unlisten(this.turntableId, lp);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    });
                },
            }), (0, skynode_1.el)("a", "MIX ??????", {
                click: async () => {
                    await this.contract.claim(this.turntableId, Config_1.default.contracts.Mix);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                },
            }), (0, skynode_1.el)("a", "KSP ??????", {
                click: async () => {
                    await this.contract.claim(this.turntableId, Config_1.default.contracts.KSP);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                },
            }), (0, skynode_1.el)("a", "PUNK ??????", {
                click: async () => {
                    await this.contract.claim(this.turntableId, Config_1.default.contracts.NewKlayPunk);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                },
            }));
        }
    }
}
exports.default = LPTokenListenersV2;
//# sourceMappingURL=LPTokenListenersV2.js.map