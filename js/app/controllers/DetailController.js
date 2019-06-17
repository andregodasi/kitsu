class DetailController {
  constructor(id) {
    let $ = document.querySelector.bind(document);
    this._service = new MainService();
    this._id = id;
    this._detail = new Bind(
      new Detail(),
      new DetailView($('#root')),
      'media');

    this._service
      .getCharacter(id)
      .then(data => this._detail.media = data.data)
      .catch(erro => console.log(erro));
  }

  redirectMain() {
    mainController = new MainController();
  }
}