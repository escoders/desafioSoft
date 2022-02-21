import API from '../../fixtures/ApiSpaceX.json'
function alteraUsuarios(id) {
    var updateUser =
     `
     mutation {
        update_users(_set: {name: "Madisson Alves Alterado", rocket: "Da terra para lua"}, where: {id: {_eq: "${id}"}}) {
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
            'Content-Type': 'application/json; charset=utf-8',
            'failOnStatusCode': 'false'
        },
        body: {
            query: updateUser
        }
    })


}

export {alteraUsuarios}