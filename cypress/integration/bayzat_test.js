/// <reference types="cypress" />
describe('Test-Suite Name', () => {
    it('Test Case Name : Register User', () => {
      
      // first visit the site
      cy.visit('https://www.bayzat.com/')
      cy.get('a:contains("Login")').as("Sign_In_Link");
      cy.get("@Sign_In_Link").click()

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      

    })
  })
  