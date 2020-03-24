/// <reference types="cypress" />
var testData = require('../support/TestData/employee_data.json')

describe('Test-Suite Name', () => {
    it('Test Case Name : Register User', () => {
      
      // first visit the site
      cy.visit('https://www.bayzat.com/')
      cy.get('a:contains("Login")').as("Sign_In_Link");
      cy.get("@Sign_In_Link").click()


      console.log("test data 1:"+testData.Employees[0]);
      console.log("test data 2:"+testData.Employees[0].userId);


      cy.get('#ember11-field').type(testData.Employees[0].userId);

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      

    })
  })
  