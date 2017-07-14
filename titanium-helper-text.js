var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitaniumHelperText = class TitaniumHelperText extends Polymer.Element {
    toggleHelperText() {
        this.$.collapse.toggle();
    }
    _computerIconStyle(text) {
        if (text) {
            return 'visibility: visible';
        }
        return 'visibility: hidden';
    }
};
__decorate([
    property(),
    __metadata("design:type", Object)
], TitaniumHelperText.prototype, "text", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumHelperText.prototype, "icon", void 0);
__decorate([
    listen('tap'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TitaniumHelperText.prototype, "toggleHelperText", null);
__decorate([
    computed('iconStyle'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], TitaniumHelperText.prototype, "_computerIconStyle", null);
TitaniumHelperText = __decorate([
    customElement('titanium-helper-text')
], TitaniumHelperText);
