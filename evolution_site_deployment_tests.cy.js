/// <reference types="cypress" />

context('Evolution site deployment', () => {
    beforeEach(() => {
        cy.visit('https://evolutionit.bg')
    })

    describe('Accessing the system', () => {
        it('site is reachable', () => {
            cy.request('https://evolutionit.bg')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        })
    })
})