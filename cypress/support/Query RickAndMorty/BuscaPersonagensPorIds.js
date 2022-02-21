import API from '../../fixtures/RickAndMortyApi.json'

function buscaPersonagensPorIds() {
    var busca =
        `{
        charactersByIds(ids:[1,2,3,4,5,6]){
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

export {buscaPersonagensPorIds}