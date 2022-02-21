/// <reference types="cypress" />

import elementos from "../../support/ElementsTodoMvc/TodoElements"



describe('Validação de interface', () => {

    before(function () {
        
            cy.visit('/')
    })

    it('Cadastra itens na lista e verifica o total de itens cadastrados', function () {

        cy.get(elementos.insereNaLista).type('item 1{enter}')
        .type('item 2{enter}')
        .type('item 3{enter}')
        .type('item 4{enter}')
        .type('item 5{enter}')
        .type('item 6{enter}')
        .type('item 7{enter}')
        cy.get(elementos.lista).children().should('have.length', '7')

    })

    it('Remove um item da lista e verifica o total de itens na lista', function () {

        cy.get(elementos.lista).children('li').eq(0)
        cy.get(elementos.button).first().click({force:true})
        cy.get(elementos.lista).children().should('have.length', '6')
        
        
   

    })

    it('Marca um item como completo, seleciona o filtro completed e valida a classe "selected" e valida sua quantidade', function () {

        cy.get(elementos.chk).first().click()
        cy.get(elementos.filtros).children('li').eq(2).click()
        cy.get(elementos.filtros).children('li').eq(2).children().should('have.class', 'selected')
        cy.get(elementos.lista).children().should('have.length', '1')
        
    })

    it('Teste de troca de filtro e limpeza da lista', function () {
        
        cy.get(elementos.filtros).children('li').eq(1).click()
        cy.get(elementos.filtros).children('li').eq(1).children().should('have.class','selected')
        cy.get(elementos.lista).children('li').should('have.length', '5')
        cy.get(elementos.filtros).children('li').eq(0).click()
        cy.get(elementos.clearCompleted).click()
        cy.get(elementos.lista).children('li').should('have.length','5')
        
        
    })
    
})