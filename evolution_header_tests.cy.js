/// <reference types="cypress" />

context('Evolution header tests', () => {
    beforeEach(() => {
        cy.visit('https://evolutionit.bg')
    })

    describe('Header', () => {
        it('Check that the site header is in full width', () => {
            const windowWidth = Cypress.config().viewportWidth

            cy.get('header').invoke('css', 'width')
                .then(widthValue => parseInt(widthValue))
                .should('be.eq', windowWidth)

            cy.window().its('innerWidth').should('be.eq', windowWidth)

        })

        it('Check that the header includes main navigation', () => {
            cy.get('header').get('#mainNav').should('be.visible')
        })
    })

    describe('Navigation bar', () => {
        const menuItems = [
            { 'title': 'About us', 'href': '#about' },
            { 'title': 'Industries & Experience', 'href': '#experience' },
            { 'title': 'Solutions', 'href': '#solutions' },
            { 'title': 'Services', 'href': '#services' },
            { 'title': 'Partners', 'href': '#partners' },
            { 'title': 'Contact', 'href': '#contact' }
        ]

        for (let index = 0; index < menuItems.length; index++) {
            it('Check the ' + menuItems[index].title + ' menu item', () => {

                cy.get('ul.menu').get('li').then(listElements => {
                    const linkTitle = listElements[index].firstChild.textContent

                    expect(linkTitle).to.eq(menuItems[index].title)

                    cy.request(menuItems[index].href).should((response) => {
                        expect(response.status).to.eq(200)
                    })
                })
            })
        }
    })
})