"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const MobileMenu_1 = __importDefault(require("../component/menu/MobileMenu"));
const PCMenu_1 = __importDefault(require("../component/menu/PCMenu"));
const UserInfo_1 = __importDefault(require("../component/menu/UserInfo"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Layout {
    constructor() {
        Layout.current = this;
        skynode_1.BodyNode.append((this.container = (0, skynode_1.el)(".layout", (0, skynode_1.el)("header", (0, skynode_1.el)(".nav", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)(".logo", (0, skynode_1.el)("img", { src: "/images/logo/logo.svg", height: "20" }))), new PCMenu_1.default(), (0, skynode_1.el)(".right", new UserInfo_1.default(), (0, skynode_1.el)("a.menu-button", (0, skynode_1.el)("i.fas.fa-bars"), {
            click: (event, button) => {
                const rect = button.rect;
                new MobileMenu_1.default({ left: rect.right - 170, top: rect.bottom }).appendTo(skynode_1.BodyNode);
            },
        })))), (0, skynode_1.el)("main", (this.content = (0, skynode_1.el)(".content"))), (0, skynode_1.el)("footer", "주식회사 디에스씨레이블 | 대표이사 :권태홍 | 사업자번호 :838-86-02498 | 개인정보보호책임자:권태홍\n주소: 대전광역시 유성구 대학로 82, 5층 505호 | mix-works@ayias.io\nCopyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED."))));
    }
    set title(title) {
        document.title = `${title} | Mix`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map