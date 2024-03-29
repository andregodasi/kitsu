class MainView extends View {

  constructor(element) {
    super(element);
    
  }

  template(model) {
    return `
      <div class="main_container">
        <div class="main_search-character">
          <label for="search-character">Nome do Personagem</label>
          <input id="search-character" onkeyup="mainController.onkeyupSearch(event)" value="${model.textSearch}">
        </div>
        <div class="main_table-container">
          <table>
            <thead>
              <tr>
                <th>Personagem</th>
                <th class="display-none-360">Descrição</th>
              </tr>
            </thead>
            <tbody>
            ${model.page.data.map(character => `
            <tr onclick="mainController.redirectDetail(${character.id})">
                <td>
                  <div class="d-flex align-items-center">
                    <img class="main_td-image"
                      src=" ${character.attributes.image && character.attributes.image.original ? character.attributes.image.original : ''}">
                    ${character.attributes.name}
                  </div>
                </td>
                <td class="display-none-360"> ${character.attributes.description.length > 100 ? character.attributes.description.substring(0, 100) + '...' : character.attributes.description}</td>
              </tr>
            `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="main_paginator-container">
        <div class="main_paginator">
          <a ${model.pageOffset <= 0 ? `class="disabled"` : `onclick="mainController.preventPage()"`}>
            <span class="fas fa-caret-left fa-2x"></span></a>
          ${(this.renderPaginator(model))}
          <a ${!model.page.meta || model.pageOffset >= model.page.meta.count ? `class="disabled"` : `onclick="mainController.nextPage()"`}>
            <span class="fas fa-caret-right fa-2x"></span></a>
        </div>
      </div>

      `;
  }

  renderPaginator(model) {
    let template = '';
    for (let page = 0; page < 5; page++) {
      const offset = model.pageOffset + (10 * page);
      template = template.concat(`
      <a  ${page === 0 ? `class="select"`: ''} ${!model.page.meta || offset >= model.page.meta.count  ? `class="disabled"` : `onclick="mainController.goToPage(${offset})"`} >
        ${offset/10 + 1}
      </a>
      `);
    }
    return template;
  }
}
