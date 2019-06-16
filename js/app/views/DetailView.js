class DetailView extends View {
    
  constructor(element) {
      
      super(element);
  }
  
  template(model) {
      
      return `
      <div> DETAIL VIEW <div>
      <h1>${model.texto}</h1>
      <button onclick="detailController.changeDetail()"></button>
      `;
  }
}
