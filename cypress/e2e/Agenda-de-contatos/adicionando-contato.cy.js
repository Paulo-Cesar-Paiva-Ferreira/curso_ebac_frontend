/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato a lista', () => {
        cy.get('[type="text"]').type('Paulo César Paiva')
        cy.get('[type="email"]').type('pcgms7@hotmail.com')
        cy.get('[type="tel"]').type('62 12345678')
        cy.get('.adicionar').click()
    })

    it('Deve conter 3 inputs ', () =>{
        cy.get('input').should('have.length', 3)
    })
})