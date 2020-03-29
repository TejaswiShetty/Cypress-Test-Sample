/// <reference types="cypress" />
var testData = require('../../fixtures/employee_data.json')
require('cypress-xpath')

beforeEach(function () {
    cy.visit('https://www.bayzat.com/')
    cy.get('a:contains("Login")').click()
    cy.get("input[name='username']").should('be.visible').type(testData.Employees[0].username)
    cy.get("input[name='password']").type(testData.Employees[0].password)
    cy.get("button[type='submit']").click()
    cy.wait(5000)
    // Cypress.Cookies.preserveOnce("session_id", "remember_token")


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})

describe('Test-Suite Name', () => {

    it('Test Case Name : Adding Duplicate Employee', () => {
        cy.get('span:contains("Add Employees")').click()
        cy.get('a[href="/enterprise/dashboard/employees/create"]').should('be.visible').click()
        cy.wait(2000)

        // Filling employee details
        cy.get("input[name='preferredName']").type(testData.Employees[0].preferredFullName)
        cy.get("input[name='firstName']").type(testData.Employees[0].firstName)
        cy.get("input[name='lastName']").type(testData.Employees[0].lastName)



        cy.get("input[name='dateOfBirthFormatted']").type(testData.Employees[0].dob)
        cy.get("input[name='dateOfBirthFormatted']").click()

        cy.contains('Please select nationality').click({ force: true })
        cy.get('.ember-power-select-search-input').type(testData.Employees[0].nationality, { force: true })
        cy.contains(testData.Employees[0].nationality).click({ force: true })


        cy.contains('Please select gender').click({ force: true })
        cy.contains(testData.Employees[0].gender).click({ force: true })

        cy.get("input[name='mobileNumber']").type(testData.Employees[0].phoneNumber)

        cy.get("input[name='workEmail']").type(testData.Employees[0].emailAddress)

        cy.get("input[name='officeNumber']").type(testData.Employees[0].workPhoneNumber)
        cy.get("input[name='position']").type(testData.Employees[0].title)

        cy.get("input[name='hiredAtFormatted']").type(testData.Employees[0].hiringDate)
        cy.get("input[name='hiredAtFormatted']").click()

        cy.get("input[name='probationEndDateFormatted']").type(testData.Employees[0].probationEndDate)
        cy.get("input[name='probationEndDateFormatted']").click()


        cy.contains('Please select country of residence').click({ force: true })
        cy.get('.ember-power-select-search-input').type(testData.Employees[0].legalCountry, { force: true }).type('{enter}');

        cy.get('.btn.btn--radio').contains(testData.Employees[0].insured).click({ force: true })


        cy.xpath("//button[contains(text(), 'Create')][1]").click()
        cy.get('.flash-message.alert.alert-danger--inverted.ember-view', { timeout: 10000 })
            .should('be.visible')
            .should('contain', "User with " + testData.Employees[0].emailAddress + testData.Employees[0].failure_message)
            .screenshot()

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })


})
