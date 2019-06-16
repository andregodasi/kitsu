class MainController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._main = new Bind(
      new Main(), 
      new MainView($('#root')), 
      'texto');
  }

  changeMain(texto) {
    console.log('deu boa');
    detailController = new DetailController();
  }
}