import API from '../../fixtures/ApiSpaceX.json'

function pesquisaUsuarios(id) {
  let searchUser = `
  {
    users(where: {id: {_eq: "${id}"}}) {
      name
      id
      rocket
      twitter
      timestamp
    }
  }
   `

  return cy.request( {
    method: 'POST',
    url: API.URL,
    Headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: {
      query: searchUser
    }
  })
  


}


export  {pesquisaUsuarios}