/// <reference types="cypress" />

context('Evolution navbar tests', () => {
    beforeEach(() => {
        cy.visit('https://evolutionit.bg')
    })

    it('Check the Home button', () => {
        const href = 'https://evolutionit.bg/'
        cy.get('#mainNav .navbar-brand')
            .should('have.text', 'EvolutionIT')
            .should('have.css', 'color', 'rgb(157, 157, 157)')
            .should('have.attr', 'href').and('eq', href)
            .then((url) => {
                cy.request(url).should((response) => {
                    expect(response.status).to.eq(200)
                })
            })
    })

    describe('Page sections', () => {

        it('Check About us menu, navigating to its section', () => {

            cy.get('[src="https://evolutionit.bg/wp-content/uploads/2019/03/pexels-photo-1089842.jpeg"]')
                .should('be.visible')
            cy.get('#mainNav a[href="#about"]').click()
            cy.get('#about h2').should('have.text', 'About us')
            cy.isInViewport('#about h2')
        })

        it('Check Industries and Experience menu, navigating to its  section', () => {
            cy.get('#mainNav a[href="#experience"]').click()
            cy.get('#experience h2').should('have.text', 'Industries & Experience')
            cy.isInViewport('#experience h2')
        })

        it('Check Solutions menu, navigating to its  section', () => {
            cy.get('#mainNav a[href="#solutions"]').click()
            cy.get('[data-id="0546a1f"] h2>strong').should('have.text', 'Solutions ')
            cy.isInViewport('[data-id="0546a1f"] h2>strong')
        })

        it('Check Services menu, navigating to its  section', () => {
            cy.get('#mainNav a[href="#services"]').click()
            cy.get('[data-id="7727d92"] h2>strong').should('have.text', 'Services')
            cy.isInViewport('[data-id="7727d92"] h2>strong')
        })

        it('Check Partners menu, navigating to its  section', () => {
            cy.get('#mainNav a[href="#partners"]').click()
            cy.get('[data-id="2181ed0"] h2').should('have.text', 'Partners')
            cy.isInViewport('[data-id="2181ed0"] h2')
            cy.isInViewport('[data-id="ed229a1"] img')
            cy.isInViewport('[data-id="1246b7e"] img')
        })

        it('Check Contacts menu, navigating to its  section', () => {
            cy.get('#mainNav a[href="#contact"]').click()
            cy.get('[data-id="1a4529d1"] h2').should('have.text', 'Contact')
            cy.isInViewport('[data-id="1a4529d1"] h2')
            cy.isInViewport('[aria-hidden="true"]')
            cy.get('#contact-form-soso').should('be.visible')
        })
    })
})