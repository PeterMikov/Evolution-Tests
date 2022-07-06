/// <reference types="cypress" />

context('Evolution services section tests', () => {
    beforeEach(() => {
        cy.visit('https://evolutionit.bg')
    })

    describe('Body - services section', () => {

        it('Consulting and Advisory', () => {
            cy.get('.elementor-tabs-wrapper [tabindex="0"]').click()
            cy.get('.elementor-tabs-wrapper [tabindex="0"] a')
                .should('have.css', 'color', 'rgb(97, 206, 112)')
            cy.get('#elementor-tab-content-1431').should('be.visible')
            cy.get('#elementor-tab-content-1431>p>strong')
                .should('contain', 'Process & Organizational Assessment')
        })

        it('Implementation', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="2"]').click()
            cy.get('#elementor-tab-content-1432').should('be.visible')
            cy.get('#elementor-tab-content-1432>p>strong')
                .should('contain', 'End to End Solutions')
        })

        it('Integration', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="3"]').click()
            cy.get('#elementor-tab-content-1433').should('be.visible')
            cy.get('#elementor-tab-content-1433>p>strong')
                .should('contain', 'Approach')
        })

        it('DevOps', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="4"]').click()
            cy.get('#elementor-tab-content-1434').should('be.visible')
            cy.get('#elementor-tab-content-1434>p>strong')
                .should('contain', 'Make the shift towards a DevOps culture')
        })

        it('Financial IT Consulting', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="5"]').click()
            cy.get('#elementor-tab-content-1435').should('be.visible')
            cy.get('#elementor-tab-content-1435>p')
                .should('contain', 'What we are particularly good in')
        })

        it('Software Development', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="6"]').click()
            cy.get('#elementor-tab-content-1436').should('be.visible')
            cy.get('#elementor-tab-content-1436>p')
                .should('contain', 'It is often the case when standard business approaches')
        })

        it('Outsorcing', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="7"]').click()
            cy.get('#elementor-tab-content-1437').should('be.visible')
            cy.get('#elementor-tab-content-1437>p')
                .should('contain', 'IT outsourcing is always a matter of minimizing expenses')
        })

        it('Maintenance', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="8"]').click()
            cy.get('#elementor-tab-content-1438').should('be.visible')
            cy.get('#elementor-tab-content-1438>p')
                .should('contain', 'We offer our clients effective software maintenance cycles while realizing cost savings.')
        })

        it('Technical support', () => {
            cy.get('.elementor-tabs-wrapper [data-tab="9"]').click()
            cy.get('#elementor-tab-content-1439').should('be.visible')
            cy.get('#elementor-tab-content-1439>p')
                .should('contain', 'Technical support encompasses a broad area of service')
        })
    })
})