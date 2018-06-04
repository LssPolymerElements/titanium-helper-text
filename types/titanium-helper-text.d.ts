declare const TitaniumHelperText_base: typeof Polymer.Element & Polymer.DeclarativeEventListenersConstructor;
declare class TitaniumHelperText extends TitaniumHelperText_base {
    text: string | null;
    icon: string;
    collapse: any;
    toggleHelperText(): void;
    readonly iconStyle: string;
}
