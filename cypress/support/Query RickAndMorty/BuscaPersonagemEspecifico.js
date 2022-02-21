import API from '../../fixtures/RickAndMortyApi.json'

function buscaPersonagenPorID() {
    var busca =
     `{
        character(id :"1"){
          id
          name
          status
          species
          type
          gender
          origin{
            name
            dimension
          }
          location{
            name
            dimension
          }
          image
          created
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

export {buscaPersonagenPorID}