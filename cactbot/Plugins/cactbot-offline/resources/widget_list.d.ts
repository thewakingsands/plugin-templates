declare type Sorter = () => number;
export default class WidgetList extends HTMLElement {
    private _nextId;
    private _nameToId;
    private _elements;
    private _sorted;
    private _elementwidth;
    private _elementheight;
    private _xinc1;
    private _xinc2;
    private _yinc1;
    private _yinc2;
    private _rowcolsize;
    private _maxnumber;
    private _connected;
    private rootElement;
    static get observedAttributes(): string[];
    set scale(s: string | null);
    get scale(): string | null;
    set toward(s: string | null);
    get toward(): string | null;
    set elementwidth(w: string | null);
    get elementwidth(): string | null;
    set elementheight(w: string | null);
    get elementheight(): string | null;
    set rowcolsize(w: string | null);
    get rowcolsize(): string | null;
    set maxnumber(w: string | null);
    get maxnumber(): string | null;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    parseToward(toward: string): void;
    attributeChangedCallback(name: string, _oldValue: string, newValue: string): void;
    addElement(name: string, element: HTMLElement, sortKey: number | Sorter): void;
    removeElement(name: string): ChildNode | undefined;
    clear(): void;
    layout(): void;
    test(): void;
}
export {};
//# sourceMappingURL=widget_list.d.ts.map