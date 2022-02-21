/// <reference types="cypress" />

import * as users from '../../support/Query SpaceX/BuscaUsers.js'
import * as criaUsuario from '../../support/Query SpaceX/InsereUser'
import * as alteracao from '../../support/Query SpaceX/AlteraUser'
import * as deletar from '../../support/Query SpaceX/DeletaUser'
let resposta


describe('Validação do funcionamento do endpoint users API SpaceX', () => {



    it('Inserção de um usuário, e validando se o retorno do mesmo está com os dados esperados', function () {
        criaUsuario.adicionarUsuario()
            .should((response) => {
                resposta = response.body.data.insert_users.returning[0].id
                expect(response.status).to.be.eq(200)
                expect(response.body.data.insert_users.returning[0].name).to.eq('Madisson Alves')
                expect(response.body.data.insert_users.returning[0].rocket).to.eq('3000 moon')
                cy.log('Id', resposta)



            })
    })

    it('Pesquisa usuário cadastrado, valida a pesquisa usando o usuário cadastrado anteriormente', () => {

        users.pesquisaUsuarios(resposta)
            .should((response) => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.users).to.be.not.null
                expect(response.body.data.users[0].id).to.be.eq(resposta)

            })
    })

    it('Alteração do usuário criado no teste, altera usuário criado anteriormente', () => {
        alteracao.alteraUsuarios(resposta)
            .should((response) => {
                expect(response.body.data.update_users.returning[0].name).to.be.eq('Madisson Alves Alterado')
                expect(response.body.data.update_users.returning[0].rocket).to.be.eq('Da terra para lua')
                expect(response.body.data.update_users.returning[0].id).to.be.eq(resposta)
            })
    })

    it('Deletar usuário criado no teste, confirma se os dados do delete foram os do usuário criado na rotina de testes', () => {
        deletar.deletaUsers(resposta)
            .should((response) => {
                expect(response.body.data.delete_users.returning[0].name).to.be.eq('Madisson Alves Alterado')
                expect(response.body.data.delete_users.returning[0].rocket).to.be.eq('Da terra para lua')
                expect(response.body.data.delete_users.returning[0].id).to.be.eq(resposta)
            })
    })
})