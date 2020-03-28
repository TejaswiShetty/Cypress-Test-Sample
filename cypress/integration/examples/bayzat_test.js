/// <reference types="cypress" />
var testData = require('../../fixtures/employee_data.json')

beforeEach(function () {
      cy.visit('https://www.bayzat.com/')
      cy.get('a:contains("Login")').as("Sign_In_Link");
      cy.get("@Sign_In_Link").click()
      cy.get("input[name='username']").should('be.visible').type(testData.Employees[0].username)
      cy.get("input[name='password']").type(testData.Employees[0].password)
      cy.get("button[type='submit']").click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})

describe('Test-Suite Name', () => {

    it('Test Case Name : Validate login lands in dashboard page', () => {
      
      // Validate for dashboard page
      cy.wait(5000)
      cy.screenshot()
      cy.url().should('include', '/dashboard')
      //validate for availablility of other elements
    })

    it('Test Case Name : Adding Employee', () => {
      cy.get('span:contains("View Team")').should('be.visible').click()
      //Validating the view team table
      cy.get('.table.hovered-rows.loader.js-employee-list').should('be.visible')


      cy.get('span:contains("Add Employees")').click()
      cy.get('a[href="/enterprise/dashboard/employees/create"]').should('be.visible').click()
      cy.wait(2000)

      // Filling employee details
      cy.get("input[name='preferredName']").type(testData.Employees[0].preferredFullName)
      cy.get("input[name='firstName']").type(testData.Employees[0].firstName)
      cy.get("input[name='lastName']").type(testData.Employees[0].lastName)

      

      cy.get("input[name='dateOfBirthFormatted']").type(testData.Employees[0].dob)
      cy.get("input[name='dateOfBirthFormatted']").click()
      cy.get('span:contains("Please select nationality")').click()
      cy.get("input[type='search']").type(testData.Employees[0].nationality).type('{enter}');

      cy.get('span:contains("Please select gender")').type(testData.Employees[0].gender).type('{enter}');

      
      cy.get("input[name='mobileNumber']").type(testData.Employees[0].phoneNumber)
      cy.get("input[name='email']").type(testData.Employees[0].emailAddress)
      cy.get("input[name='officeNumber']").type(testData.Employees[0].workPhoneNumber)
      cy.get("input[name='position']").type(testData.Employees[0].title)
      cy.get("input[name='hiredAtFormatted']").type(testData.Employees[0].hiringDate)
      cy.get("input[name='probationEndDateFormatted']").type(testData.Employees[0].probationEndDate)
      cy.get('span:contains("Please select country of residence")').type(testData.Employees[0].legalCountry)
      if(testData.Employees[0].insured="No")
      {
        cy.get('button:contains("No")').click();
      }
      else{
        cy.get('button:contains("Yes")').click();

      }

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    })


  })
  