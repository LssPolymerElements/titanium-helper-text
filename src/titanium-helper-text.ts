@Polymer.decorators.customElement('titanium-helper-text') class TitaniumHelperText extends Polymer.DeclarativeEventListeners
(Polymer.Element) {
  @Polymer.decorators.property() text: string|null;

  @Polymer.decorators.property() icon: string;

  @Polymer.decorators.query('iron-collapse') collapse: any;

  @Polymer
      .decorators.listen('tap', 'button') toggleHelperText() {
    this.collapse.toggle();
  }

  @Polymer
      .decorators.computed('text') get iconStyle(): string {
    console.log(this.text);
    if (this.text) {
      return 'visibility: visible;';
    }
    return 'visibility: hidden;';
  }
}
