import API from '../../fixtures/RickAndMortyApi.json'

function buscaPersonagens() {
    var busca =
     `{
        characters{
          results{
            name
            id
            gender
            created
            origin{
              name
              dimension
            }
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

export {buscaPersonagens}