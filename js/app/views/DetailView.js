class DetailView extends View {
    
  constructor(element) {
      
      super(element);
  }
  
  template(model) {      
      return `
      <div class="detail_container">
        <h1>${model.media && model.media.attributes.titles ? ('' || model.media.attributes.titles.en || model.media.attributes.titles.en_jp) : ''}</h1>
        <div class="detail_poster-container center">
          <img src="${model.media ? model.media.attributes.posterImage.medium : ''}">
        </div>
        <article class="detail_synopsis">
          <p>
          ${model.media ? model.media.attributes.synopsis : ''}
          </p>

          <details>
            <summary>Detalhes</summary>
            <p>
              <b>Tipo</b>: ${model.media ? model.media.type : ''}
            </p>
            <p>
              <b>Estreia</b>: ${model.media ? model.media.attributes.startDate : ''}
            </p>
            <p>
              <b>Encerramento</b>: ${model.media ? model.media.attributes.endDate : ''}
            </p>
            <p>
              <b>Maior acesso</b>: ${model.media ? model.media.attributes.subtype : ''}
            </p>
            <p>
              <b>Faixa etária</b>: ${model.media ? model.media.attributes.ageRatingGuide : ''}
            </p>
            <p>
              <b>Status</b>: ${model.media ? model.media.attributes.status : ''}
            </p>
          </details>
        </article>
        <div class="detail_button-container">
          <button onclick="detailController.redirectMain()">
              <span class="fas fa-caret-left fa-2x"></span>
            Nova busca
          </button>
        </div>

      </div>
      `;
  }
}
