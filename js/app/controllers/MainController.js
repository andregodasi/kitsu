
class MainController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._service = new MainService();
    this._timeout = null;

    this._main = new Bind(
      new Main(),
      new MainView($('#root')),
      'updatePage');

    this._service
      .getPage(0)
      .then(data => this._main.updatePage(0, data))
      .catch(erro => console.log(erro));
  }

  nextPage() {
    const pageNextOffset = this._main.pageOffset + 10;
    this._service
      .getPage(pageNextOffset, this._main.textSearch)
      .then(data => this._main.updatePage(pageNextOffset, data))
      .catch(erro => console.log(erro));
  }

  preventPage() {
    const pagePreventOffset = this._main.pageOffset - 10;
    this._service
      .getPage(pagePreventOffset, this._main.textSearch)
      .then(data => this._main.updatePage(pagePreventOffset, data))
      .catch(erro => console.log(erro));
  }

  goToPage(pageOffset) {
    this._service
      .getPage(pageOffset, this._main.textSearch)
      .then(data => this._main.updatePage(pageOffset, data))
      .catch(erro => console.log(erro));
  }

  onkeyupSearch(event) {
    clearTimeout(this._timeout);
    const textSearch = event.target.value;
    this._main.textSearch = textSearch;
    this._timeout = setTimeout(() => {
      if (textSearch.length >= 3) {
        this._service
          .getPage(0, textSearch)
          .then(data => this._main.updatePage(0, data))
          .catch(erro => console.log(erro));
      }
    }, 5000);
  }
}