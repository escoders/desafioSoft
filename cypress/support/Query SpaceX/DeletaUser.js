import API from '../../fixtures/ApiSpaceX.json'
function deletaUsers(id){
    var deleteUser = `
    mutation {
        delete_users(where: {id: {_eq: "${id}"}}) {
          returning {
            id
            name
            rocket
            timestamp
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
            query: deleteUser
        }
    })

}

export {deletaUsers}