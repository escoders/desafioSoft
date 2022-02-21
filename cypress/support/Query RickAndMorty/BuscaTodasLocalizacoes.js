import API from '../../fixtures/RickAndMortyApi.json'

function buscaTodasLocalizacoes() {
    var busca =
     `{
        locations{
          results{
            id
            name
            type
            dimension
            residents{
              id
              name
            }
            created
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

export {buscaTodasLocalizacoes}