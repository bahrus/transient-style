export class TransientStyle extends HTMLElement{
    static observedAttributes = ['is-defined', 'remove-when']
    attributeChangedCallback(){
        this.do();
    }
    _conn: boolean | undefined;
    connectedCallback(){
        this._conn = true; //I don't trust this.isConnected
        this.do();
    }
    do(){
        if(!this.hasAttribute('is-defined')) return;
        const removeWhen = this.getAttribute('remove-when');
        if(removeWhen === null) return;
        const removeNames = JSON.parse(removeWhen) as string[];
        const promises: Promise<void>[] = removeNames.map(s => customElements.whenDefined(s));
        Promise.all(promises).then((values) => {
            this.remove();
        });
    }
}