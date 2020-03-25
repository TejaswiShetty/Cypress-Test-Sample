

describe('Test-Suite Name', () => {
  it('Test Case Name : Register User', () => {
    
    // first visit the site
    cy.visit('http://automationpractice.com/index.php')

    // get elements we will be interacting with and alias them
    cy.get('a:contains("Sign in")').as("Sign_In_Link");
    // interact with the elements
    cy.get("@Sign_In_Link").click()

    cy.get('input[name="email_create"]').as("email_create");
    cy.get('span:contains("Create an account")').as("Create_account_btn");

    cy.get("@Sign_In_Link").click()
    cy.get("@email_create").type("Jayyu.test@abc.com");
    cy.get("@Create_account_btn").click()


    // cy.get(".page-heading").as("message");

    //assertions
    // cy.url().should("include", "my-account");
    cy.get("h1").should("have.text", "Create an account");


  })
})
