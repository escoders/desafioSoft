import API from '../../fixtures/RickAndMortyApi.json'

function buscaLocalizacaoPorID() {
    var busca =
     `{
        location(id : 1
        ){
              id
          name
          type
          dimension
          residents{
            name
            id
          }
        }
      }`

    return cy.request({
        method: 'POST',
        url: API.URL,
        Headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'failOnStatusCode': 'false'
        },
        body: {
            query: busca
        }
    })


}

export {buscaLocalizacaoPorID}