import API from '../../fixtures/ApiSpaceX.json'
function adicionarUsuario() {
    let insertUser = `
    mutation {
        insert_users(objects: {name: "Madisson Alves", rocket: "3000 moon", twitter: "@twitter"}) {
          returning {
            id
            name
            rocket
            twitter
          }
        }
    }
      
`

    return cy.request({
        method: 'POST',
        url: API.URL,
        Headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: {
            query: insertUser
        }
    })
}
    



export  {adicionarUsuario}