export class TransientStyle extends HTMLElement {
    attributeChangedCallback() {
        this.do();
    }
    connectedCallback() {
        this._conn = true; //I don't trust this.isConnected
        this.do();
    }
    do() {
        if (!this.hasAttribute('is-defined'))
            return;
        const removeWhen = this.getAttribute('remove-when');
        if (removeWhen === null)
            return;
        const removeNames = JSON.parse(removeWhen);
        const promises = removeNames.map(s => customElements.whenDefined(s));
        Promise.all(promises).then((values) => {
            this.remove();
        });
    }
}
TransientStyle.observedAttributes = ['is-defined', 'remove-when'];
