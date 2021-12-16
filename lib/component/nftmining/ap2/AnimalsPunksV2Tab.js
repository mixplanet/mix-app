"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../../../CommonUtil"));
const AnimalsPunksV2PoolContract_1 = __importDefault(require("../../../contracts/mix/AnimalsPunksV2PoolContract"));
const MixContract_1 = __importDefault(require("../../../contracts/mix/MixContract"));
const AnimalsPunksV2Contract_1 = __importDefault(require("../../../contracts/nft/AnimalsPunksV2Contract"));
const Wallet_1 = __importDefault(require("../../../klaytn/Wallet"));
const Loading_1 = __importDefault(require("../../loading/Loading"));
const PunkItem_1 = __importDefault(require("./PunkItem"));
class AnimalsPunksV2Tab extends skynode_1.DomNode {
    constructor() {
        super(".animals-punks-v2-tab");
        this.punks = [];
        this.totalMix = bignumber_1.BigNumber.from(0);
        this.append((0, skynode_1.el)("header", (0, skynode_1.el)(".total-mix", (0, skynode_1.el)("h4", "쌓인 총 MIX"), this.totalMixDisplay = (0, skynode_1.el)("span", "Loading...")), (0, skynode_1.el)("a.take-all-button", "한꺼번에 받기", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    const balance = await MixContract_1.default.balanceOf(owner);
                    const fee = this.totalMix.div(9);
                    if (balance.lt(fee)) {
                    }
                    else {
                        if ((await MixContract_1.default.allowance(owner, AnimalsPunksV2PoolContract_1.default.address)).lt(fee)) {
                            await MixContract_1.default.approve(AnimalsPunksV2PoolContract_1.default.address, ethers_1.constants.MaxUint256);
                            setTimeout(async () => {
                                await AnimalsPunksV2PoolContract_1.default.claim(this.punks);
                            }, 2000);
                        }
                        else {
                            await AnimalsPunksV2PoolContract_1.default.claim(this.punks);
                        }
                    }
                }
            },
        })), this.list = (0, skynode_1.el)(".punk-list", new Loading_1.default()));
        this.load();
    }
    async load() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const balance = (await AnimalsPunksV2Contract_1.default.balanceOf(walletAddress)).toNumber();
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const punkId = await AnimalsPunksV2Contract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    this.punks.push(punkId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.list.empty();
            for (const punkId of this.punks) {
                new PunkItem_1.default(this, punkId).appendTo(this.list);
            }
        }
        else {
            this.list.empty();
        }
    }
    changeMix(mix) {
        this.totalMix = this.totalMix.add(mix);
        this.totalMixDisplay.empty().appendText(CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(this.totalMix), 5));
    }
}
exports.default = AnimalsPunksV2Tab;
//# sourceMappingURL=AnimalsPunksV2Tab.js.map