class Page {
  constructor() {
    this._data = []
    this._meta;
    this._links;
  }

  set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  set meta(meta) {
    this._meta = meta;
  }

  get meta() {
    return this._meta;
  }

  set links(links) {
    this._links = links;
  }

  get links() {
    return this._links;
  }
}