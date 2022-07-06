/// <reference types="cypress" />

context('Evolution header tests', () => {
    beforeEach(() => {
        cy.visit('https://evolutionit.bg')
    })
    describe('Check the footer dimensions', () => {
        it('check that the site footer is in full width', () => {
            const windowWidth = Cypress.config().viewportWidth

            cy.get('footer').invoke('css', 'width')
                .then(widthValue => parseInt(widthValue))
                .should('be.eq', windowWidth)

            cy.window().its('innerWidth').should('be.eq', windowWidth)

        })
    })

    describe('Check the footer elements', () => {

        const elements = ['About us',
            'Industries & Experience',
            'Solutions',
            'Services',
            'Partners',
            'Contact']

        const elementsLinks = [
            { 'href': '#about' },
            { 'href': '#experience' },
            { 'href': '#solutions' },
            { 'href': '#services' },
            { 'href': '#partners' },
            { 'href': '#contact' }]


        for (let index = 0; index < elements.length; index++) {
            it('Check the elements in the footer: ' + elements[index], () => {
                cy.get('footer #maxmegamenu-7 .menu li').then(listElements => {
                    const linkTitle = listElements[index].textContent
                    expect(linkTitle).to.eq(elements[index])

                cy.request(elementsLinks[index].href).should((response) => {
                    expect(response.status).to.eq(200)
                })
                })
            })
        }

        it('Check the copy right element', () => {
            cy.get('.copy-right').get('.col-md-6>p').should('contain', '© EvolutionIT 2018')
        })
    })
})