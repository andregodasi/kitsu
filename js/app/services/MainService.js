class MainService {

  constructor() {

    this._http = new HttpService();
  }

  getPage(pageOffset, textSearch, pageLimit = 10) {
    let url = 'https://kitsu.io/api/edge/characters?';

    if (pageLimit) {
      url = url.concat(`page[limit]=${pageLimit}`);
    }
    if (pageOffset) {
      url = url.concat(`&page[offset]=${pageOffset}`);
    }

    if (textSearch) {
      url = url.concat(`&filter[name]=${textSearch}`);
    }

    return this._http
      .get(url)
      .then(data => {
        return data;
      })
      .catch(erro => {
        throw new Error(`Error: ${erro}`);
      });
  }

  getCharacter(id) {
    const url = `https://kitsu.io/api/edge/characters/${id}/media-characters`;

    return this._http
      .get(url)
      .then(data => {
        const urlMedia = `https://kitsu.io/api/edge/castings/${data.data[0].id}/media`;
        return this._http
          .get(urlMedia)
          .then(dataCharacter => {

            return dataCharacter;
          })
          .catch(error => {
            throw new Error(`Error: ${error}`);
          });
      })
      .catch(error => {
        throw new Error(`Error: ${error}`);
      });
  }

}