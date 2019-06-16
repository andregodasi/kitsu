class DetailController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._detail = new Bind(
      new Detail(), 
      new DetailView($('#root')), 
      'texto');
  }

  changeDetail() {
    mainController = new MainController();
  }
}