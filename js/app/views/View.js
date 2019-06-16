class View {
    
    constructor(element) {
        
        this._element = element;
    }
    
    template() {
        
        throw new Error('O método template deve ser implementado');
    }
    
    render(model) {
        this._element.innerHTML = this.template(model);
    }
}