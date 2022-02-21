/// <reference types="cypress" />

import * as buscaUmId from '../../support/Query RickAndMorty/BuscaLocalizacaoPorId'
import * as busca from '../../support/Query RickAndMorty/BuscaTodasLocalizacoes'
import * as BuscaPorIds from '../../support/Query RickAndMorty/BuscaLocalizacoesPorIds'


describe('Validação do funcionamento do endpoint Personagens API Rick And Morty', () => {



    it('Buscar uma localização por id, validando se sua dimensão é a esperada', function () {
        buscaUmId.buscaLocalizacaoPorID()
            .should((response) => {

                expect(response.status).to.be.eq(200)
                expect(response.body.data.location).to.be.not.null
                expect(response.body.data.location.dimension).to.eq('Dimension C-137')




            })
    })

    it('Pesquisa todos os locais', () => {

        busca.buscaTodasLocalizacoes()
            .should((response) => {
                expect(response.status).to.be.eq(200)
                expect(response.body.data.locations.results[0].dimension).to.be.eq('Dimension C-137')
                expect(response.body.data.locations.results[0].id).to.be.eq('1')
                expect(response.body.data.locations.results[0].name).to.be.eq('Earth (C-137)')
                //validandos se os dados da primeira dimensão estão conforme o esperado
            })
    })

    it('Procura mais de um personagem por id, espera que o retorno da busca não retorne um arrey nullo', () => {
        BuscaPorIds.buscaLocalizacoesPorIds()
            .should((response) => {
                //valida se a primeira dimensão é a Terra
                expect(response.body.data.locationsByIds[0].dimension).to.be.eq('Dimension C-137')
                expect(response.body.data.locationsByIds[0].id).to.be.eq('1')
                expect(response.body.data.locationsByIds[0].name).to.be.eq('Earth (C-137)')
                //valida a terceira dimensão
                expect(response.body.data.locationsByIds[2].dimension).to.be.eq('unknown')
                expect(response.body.data.locationsByIds[2].id).to.be.eq('3')
                expect(response.body.data.locationsByIds[2].name).to.be.eq('Citadel of Ricks')
            })
    })


})