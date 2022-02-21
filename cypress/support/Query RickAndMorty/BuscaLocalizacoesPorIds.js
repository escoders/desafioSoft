import API from '../../fixtures/RickAndMortyApi.json'

function buscaLocalizacoesPorIds() {
    var busca =
     `
     {
       locationsByIds(ids: [1,2,3,4,5]){
         id
         name
         dimension
         type
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

export {buscaLocalizacoesPorIds}