class View {
    
    constructor(element) {
        
        this._element = element;
    }
    
    template() {
        
        throw new Error('required implement method template.');
    }
    
    render(model) {
        this._element.innerHTML = this.template(model);
    }
}