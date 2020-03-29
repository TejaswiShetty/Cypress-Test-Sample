/// <reference types="cypress" />
var testData = require('../../fixtures/employee_data.json')
require('cypress-xpath')

beforeEach(function () {
    //login and adding employee
    cy.visit('https://www.bayzat.com/')
    cy.get('a:contains("Login")').click()
    cy.get("input[name='username']").should('be.visible').type(testData.Employees[0].username)
    cy.get("input[name='password']").type(testData.Employees[0].password)
    cy.get("button[type='submit']").click()
    cy.wait(5000)
    // Cypress.Cookies.preserveOnce("session_id", "remember_token")
    cy.get('span:contains("Add Employees")').click()
    cy.get('a[href="/enterprise/dashboard/employees/create"]').should('be.visible').click()
    cy.wait(2000)

    // Filling employee details
    cy.get("input[name='preferredName']").type(testData.Employees[1].preferredFullName)
    cy.get("input[name='firstName']").type(testData.Employees[1].firstName)
    cy.get("input[name='lastName']").type(testData.Employees[1].lastName)



    cy.get("input[name='dateOfBirthFormatted']").type(testData.Employees[1].dob)
    cy.get("input[name='dateOfBirthFormatted']").click()

    cy.contains('Please select nationality').click({ force: true })
    cy.get('.ember-power-select-search-input').type(testData.Employees[1].nationality, { force: true })
    cy.contains(testData.Employees[1].nationality).click({ force: true })


    cy.contains('Please select gender').click({ force: true })
    cy.contains(testData.Employees[1].gender).click({ force: true })

    cy.get("input[name='mobileNumber']").type(testData.Employees[1].phoneNumber)

    var email = 'random' + Math.random() * 1000 + '@abc.com';
    cy.get("input[name='workEmail']").type(email)
    testData.Employees[1].workEmail = email;

    cy.get("input[name='officeNumber']").type(testData.Employees[1].workPhoneNumber)
    cy.get("input[name='position']").type(testData.Employees[1].title)

    cy.get("input[name='hiredAtFormatted']").type(testData.Employees[1].hiringDate)
    cy.get("input[name='hiredAtFormatted']").click()

    cy.get("input[name='probationEndDateFormatted']").type(testData.Employees[1].probationEndDate)
    cy.get("input[name='probationEndDateFormatted']").click()


    cy.contains('Please select country of residence').click({ force: true })
    cy.get('.ember-power-select-search-input').type(testData.Employees[1].legalCountry, { force: true }).type('{enter}');

    cy.get('.btn.btn--radio').contains(testData.Employees[1].insured).click({ force: true })


    cy.xpath("//button[contains(text(), 'Create')][1]").click()
    cy.get('.flash-message.alert.alert-success--inverted.active.ember-view', { timeout: 10000 })
        .should('be.visible')
        .should('contain', testData.Employees[0].success_message)

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})



describe('Test-Suite Name', () => {

    it('Test Case Name : Deleting Employee', () => {

        cy.get('span:contains("View Team")').should('be.visible').click()
        //searching employee
        cy.get('.js-attendance-report-filters__search').type(testData.Employees[1].firstName)
        cy.wait(2000);

        cy.xpath("//table/tbody").contains('tr', testData.Employees[1].lastName)
            .find('td:eq(0)').click({ force: true })
        cy.get('.btn.btn-danger.btn-icon').should('be.visible').click()
        cy.get('.modal-content').contains("Confirm").click()

        cy.get('.alert', { timeout: 5000 })
            .should('be.visible')
            // .should('contain', testData.Employees[1].delete_success_message)
            .screenshot()

        //logout after delete
        cy.contains("Logout").click()
        cy.wait(2000)
        cy.xpath("//button[contains(text(), 'Log In')]").should('be.visible')
    
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            cy.log("No emplyee present with the searched name.")
            cy.contains("Logout").click()
            return false
        })




    })


})
