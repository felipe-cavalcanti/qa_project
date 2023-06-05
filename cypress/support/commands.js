// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('accessInputAndType', (componentSelector, inputContent) => {
    cy.get(componentSelector)
        .click()
        .clear()
        .type(inputContent);
})

Cypress.Commands.add('clickOnElement', (componentSelector) => {
    cy.get(componentSelector)
        .click();
    cy.log(`Element ${componentSelector} clicked`)
})

Cypress.Commands.add('selectViewMode', (componentSelector) => {
    cy.get(componentSelector)
        .parent('span')
        .click({ force: true })
})

Cypress.Commands.add('getViewModeInput', (componentSelector) => {
    cy.get(componentSelector)
        .parent('span')
})

Cypress.Commands.add('doubleClickOnElement', (componentSelector) => {
    cy.get(componentSelector).dblclick();
})

Cypress.Commands.add('performLoginSteps', (usernameSelector, username, passwordSelector, password, loginButtonSelector) => {
    cy.accessInputAndType(usernameSelector, username);
    cy.accessInputAndType(passwordSelector, password);
    cy.clickOnElement(loginButtonSelector)
})

Cypress.Commands.add('selectListItem', (listItemSelector, listItemIndex) => {
cy.get(listItemSelector)
      .eq(listItemIndex)
      .click();
})