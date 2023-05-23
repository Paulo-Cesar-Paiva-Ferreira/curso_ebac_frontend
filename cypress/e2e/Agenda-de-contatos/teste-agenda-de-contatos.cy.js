/// <reference types="cypress"/>

describe('Testes para agenda de contatos', ()=> {

    beforeEach(()=> {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', ()=> {
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve conter 3 inputs ', () =>{
        cy.get('input').should('have.length', 3)
    })

    it('Deve adicionar um contato a lista', () => {
        cy.get('[type="text"]').type('Paulo César Paiva')
        cy.get('[type="email"]').type('pcgms7@hotmail.com')
        cy.get('[type="tel"]').type('62 12345678')
        cy.get('.adicionar').click()
    })

    it('Deve conter 4 contatos ', () => {
        cy.get('.contato').should('have.length', 4)
    })

    it('deve editar e salvar', ()=> {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Marcelo')
        cy.get('[type="email"]').clear().type('mls@gmail.com')
        cy.get('[type="tel"]').clear().type('62 12121212')
        cy.get('.alterar').click()

        cy.get(':nth-child(3) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Marcelo')

    })

    it('deve remover um contato', ()=>{
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        
        cy.get('.contato').should('have.length', 3)
    })

})