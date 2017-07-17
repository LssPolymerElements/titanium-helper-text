@customElement('titanium-helper-text')
class TitaniumHelperText extends Polymer.Element {

    @property()
    text: string | null;

    @property()
    icon: string;

    @listen('tap', 'button')
    toggleHelperText() {
        this.$.collapse.toggle();
    }

    @computed('iconStyle')
    _computerIconStyle(text: string): string {
        if (text) {
            return 'visibility: visible';
        }
        return 'visibility: hidden';
    }
}
