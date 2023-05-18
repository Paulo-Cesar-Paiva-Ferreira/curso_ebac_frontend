/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar o contato e salvar', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type(' da Silva')
        cy.get('[type="email"]').type('pcgms')
        cy.get('[type="tel"]').type('   62 11111111')
        cy.get('.alterar').click()
    })

    it('Deve conter 3 inputs ', () =>{
        cy.get('input').should('have.length', 3)
    })


    it('Deve conter 3 contatos ', () => {
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve editar o contato e cancelar', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type(' da Silva')
        cy.get('[type="email"]').type('pcgms')
        cy.get('[type="tel"]').type('   62 11111111')
        cy.get('.cancelar').click()
    })
})