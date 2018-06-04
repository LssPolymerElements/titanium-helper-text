"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitaniumHelperText = class TitaniumHelperText extends Polymer.DeclarativeEventListeners(Polymer.Element) {
    toggleHelperText() {
        this.collapse.toggle();
    }
    get iconStyle() {
        console.log(this.text);
        if (this.text) {
            return 'visibility: visible;';
        }
        return 'visibility: hidden;';
    }
};
__decorate([
    Polymer.decorators.property(),
    __metadata("design:type", Object)
], TitaniumHelperText.prototype, "text", void 0);
__decorate([
    Polymer.decorators.property(),
    __metadata("design:type", String)
], TitaniumHelperText.prototype, "icon", void 0);
__decorate([
    Polymer.decorators.query('iron-collapse'),
    __metadata("design:type", Object)
], TitaniumHelperText.prototype, "collapse", void 0);
__decorate([
    Polymer
        .decorators.listen('tap', 'button'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TitaniumHelperText.prototype, "toggleHelperText", null);
__decorate([
    Polymer
        .decorators.computed('text'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TitaniumHelperText.prototype, "iconStyle", null);
TitaniumHelperText = __decorate([
    Polymer.decorators.customElement('titanium-helper-text')
], TitaniumHelperText);
//# sourceMappingURL=titanium-helper-text.js.map