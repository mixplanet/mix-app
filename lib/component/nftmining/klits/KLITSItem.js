"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../../../CommonUtil"));
const MixContract_1 = __importDefault(require("../../../contracts/mix/MixContract"));
const KLITSPoolContract_1 = __importDefault(require("../../../contracts/mix/KLITSPoolContract"));
const KLITSContract_1 = __importDefault(require("../../../contracts/nft/KLITSContract"));
const Wallet_1 = __importDefault(require("../../../klaytn/Wallet"));
const KlubsLoader_1 = __importDefault(require("../../../KlubsLoader"));
const Confirm_1 = __importDefault(require("../../dialogue/Confirm"));
class KLITSItem extends skynode_1.DomNode {
    constructor(tab, id) {
        super(".klits-item");
        this.tab = tab;
        this.id = id;
        this.claimable = ethers_1.BigNumber.from(0);
        this.append((0, skynode_1.el)(".content", this.klits = (0, skynode_1.el)(".klits", (0, skynode_1.el)("span.id", `#${id}`)), (0, skynode_1.el)(".info", (0, skynode_1.el)("h5", "쌓인 MIX"), this.mixAmount = (0, skynode_1.el)(".amount", "Loading...")), (0, skynode_1.el)(".controller", (0, skynode_1.el)("button.claim-button", "받기", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
                const owner = await Wallet_1.default.loadAddress();
                if (owner !== undefined) {
                    const balance = await MixContract_1.default.balanceOf(owner);
                    const fee = this.claimable.div(9);
                    if (balance.lt(fee)) {
                        new Confirm_1.default("믹스 구매", "NFT로부터 MIX를 수령받기 위해서는 수령받을 MIX의 10%의 MIX를 선납해야 합니다.", "구매", () => {
                            open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                        });
                    }
                    else {
                        if ((await MixContract_1.default.allowance(owner, KLITSPoolContract_1.default.address)).lt(fee)) {
                            await MixContract_1.default.approve(KLITSPoolContract_1.default.address, ethers_1.constants.MaxUint256);
                            setTimeout(async () => {
                                await KLITSPoolContract_1.default.claim([this.id]);
                            }, 2000);
                        }
                        else {
                            await KLITSPoolContract_1.default.claim([this.id]);
                        }
                    }
                }
            },
        }))));
        this.loadImage();
        this.load();
        this.refreshInterval = setInterval(() => this.load(), 1000);
    }
    async loadImage() {
        const metadata = await KlubsLoader_1.default.loadMetadata(KLITSContract_1.default.address, this.id);
        this.klits.style({ backgroundImage: `url(${metadata.image})` });
    }
    async load() {
        const claimable = await KLITSPoolContract_1.default.claimableOf(this.id);
        if (this.deleted !== true) {
            this.mixAmount.empty().appendText(CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimable), 5));
            this.tab.changeMix(claimable.sub(this.claimable));
            this.claimable = claimable;
        }
    }
    delete() {
        clearInterval(this.refreshInterval);
        super.delete();
    }
}
exports.default = KLITSItem;
//# sourceMappingURL=KLITSItem.js.map