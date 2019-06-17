class Main {
  constructor() {
    this._page = new Page();
    this._pageOffset = 0;
    this._textSearch = '';
  }

  set page(page) {
    this._page = page;
  }

  get page() {
    return this._page;
  }

  set pageOffset(pageOffset) {
    this._pageOffset = pageOffset;
  }

  get pageOffset() {
    return this._pageOffset;
  }

  set textSearch(textSearch) {
    this._textSearch = textSearch;
  }

  get textSearch() {
    return this._textSearch;
  }

  updatePage(pageOffset, page) {
    this._pageOffset = pageOffset;
    this.page = page;
  }
}