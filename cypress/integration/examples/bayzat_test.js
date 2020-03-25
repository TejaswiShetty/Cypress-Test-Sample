/// <reference types="cypress" />
var testData = require('../../fixtures/employee_data.json')

describe('Test-Suite Name', () => {
    it('Test Case Name : Employee login', () => {
      
      // first visit the site
      cy.visit('https://www.bayzat.com/')
      cy.get('a:contains("Login")').as("Sign_In_Link");
      cy.get("@Sign_In_Link").click()


      cy.get("input[name='username']").should('be.visible').type(testData.Employees[0].username)
      cy.get("input[name='password']").type(testData.Employees[0].password)
      cy.get("button[type='submit']").click()
      
      cy.url().should('include', '/dashboard');
      cy.get('span:contains("View Team")').should('be.visible').click();
      cy.get('span:contains("Add Employees")').should('be.visible').click();
      cy.get('a[href="/enterprise/dashboard/employees/create"]').should('be.visible').click();

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      

    })

    // it('Test Case Name : Adding Employee', () => {
      
    //   cy.get('span:contains("Add Employees")').should('be.visible').click();
    //   cy.get('a:contains("Add Employee")').should('be.visible').click();

    //   Cypress.on('uncaught:exception', (err, runnable) => {
    //     // returning false here prevents Cypress from
    //     // failing the test
    //     return false
    // })
    // })


  })
  