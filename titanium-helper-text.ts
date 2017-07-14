@customElement('titanium-helper-text')
class TitaniumHelperText extends Polymer.Element {

    @property()
    text: string | null;

    @property()
    icon: string;

    @listen('tap')
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
