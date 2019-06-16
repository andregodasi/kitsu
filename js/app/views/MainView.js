class MainView extends View {
    
  constructor(element) {
      
      super(element);
  }
  
  template(model) {
      
      return `
      <div> MAIN VIEW <div>
      <h1>${model.texto}</h1>
      <button onclick="mainController.changeMain('teste')">teste</button>
      `;
  }
}
