/// <reference types="cypress" />

import * as personagens from "../../support/Query RickAndMorty/BuscaTodosPersonagens"
import * as personagensPorId from '../../support/Query RickAndMorty/BuscaPersonagemEspecifico'
import * as personagensPorIds from '../../support/Query RickAndMorty/BuscaPersonagensPorIds'
let valorProcura 


describe('Validação do funcionamento do endpoint Personagens API Rick And Morty', () => {
    
    

    it('Buscar por todos os personagens, validando se o array não veio nullo', function () {
            personagens.buscaPersonagens()
                .should((response) => {
                    
                    expect(response.status).to.be.eq(200)
                    expect(response.body.data.characters).to.be.not.null
                    valorProcura = response.body.data.characters.results[0].id



                })
        })

    it('Pesquisa um personagem por Id, e valida se o retorno está de acordo com o esperado', () => {

        personagensPorId.buscaPersonagenPorID()
             .should((response) => {
                 expect(response.status).to.be.eq(200)
                 expect(response.body.data.character.name).to.be.eq('Rick Sanchez')
                 expect(response.body.data.character.id).to.be.eq('1')
 
             })
     })

    it('Procura mais de um personagem por id, espera que o retorno da busca não retorne um arrey nullo', () => {
        personagensPorIds.buscaPersonagensPorIds()
            .should((response) => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.charactersByIds).to.not.be.null
            })
    })

    
})