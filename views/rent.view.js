const getView = (properties) => `
  <h2>Propiedades en alquiler</h2>
  <select name="sector">
    <option value="Banda Norte">Banda Norte</option>
    <option value="Castelli">Castelli</option>
    <option value="Centro">Centro</option>
    <option value="Alberdi">Alberdi</option>
  </select>
  <div class="propiedades">
    ${
      properties.map((property) => (`
        <a href="http://localhost:3001/propiedad/${property.slug}">
          <h1>${property.description} [${property.type}]</h1>
          <p>${property.currency} [${property.price}]</p>
          <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
          <img src="${property.photo}" class="card-img-top">
        </a>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };