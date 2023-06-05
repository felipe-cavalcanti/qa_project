import * as selectors from '../support/selectors'
import * as utils from '../fixtures/utils.json';

describe('Scenarios related to Login feature', () => {
  beforeEach(() => {
    cy.visit(selectors.loginPageURL);
  })

  it('Validating user is successfully logged in', () => {
    cy.get(selectors.loginFormClass)
      .should('be.visible');
    cy.performLoginSteps(selectors.loginUsernameInputID, utils.testUser, selectors.loginPasswordInputID, utils.password, selectors.loginButtonClass)
    cy.get(selectors.loginFormClass)
      .should('not.exist');
    cy.url()
      .should('be.equal', selectors.baseURL)
      .and('not.be.equal', selectors.loginPageURL);
  })

  it('Validating incorrect Password does not lead user to successful login', () => {
    cy.performLoginSteps(selectors.loginUsernameInputID, utils.testUser, selectors.loginPasswordInputID, utils.incorrectPassword, selectors.loginButtonClass);
    cy.get(selectors.errorMessageClass)
      .should('exist')
      .and('have.text', selectors.errorMessageLabel);
    cy.url()
      .should('not.be.equal', selectors.baseURL)
      .and('be.equal', selectors.loginPageURL);
  })

  it('Validating incorrect Username does not lead user to successful login', () => {
    cy.performLoginSteps(selectors.loginUsernameInputID, utils.incorrectUser, selectors.loginPasswordInputID, utils.password, selectors.loginButtonClass);
    cy.get(selectors.errorMessageClass)
      .should('exist')
      .and('have.text', selectors.errorMessageLabel);
    cy.url()
      .should('not.be.equal', selectors.baseURL)
      .and('be.equal', selectors.loginPageURL);
  })

  it('Validating user is not able to login with both empty Username and Password fields', () => {
    cy.clickOnElement(selectors.loginButtonClass);
    cy.get(selectors.loginAlertMessagesClass)
      .should('exist')
      .and('have.text', selectors.bothAlertMessages);
    cy.url()
      .should('not.be.equal', selectors.baseURL)
      .and('be.equal', selectors.loginPageURL);
  })

  it('Validating user is not able to login with only one of the fields filled', () => {
    cy.accessInputAndType(selectors.loginUsernameInputID, utils.testUser);
    cy.clickOnElement(selectors.loginButtonClass);
    cy.get(selectors.loginAlertMessagesClass)
      .should('exist')
      .and('have.text', selectors.alertMessageForMissingPassword)
      .and('not.have.text', selectors.alertMessageForMissingUsername);
    cy.get(selectors.loginUsernameInputID)
      .clear();
    cy.accessInputAndType(selectors.loginPasswordInputID, utils.password);
    cy.get(selectors.loginAlertMessagesClass)
      .should('exist')
      .and('not.have.text', selectors.alertMessageForMissingPassword)
      .and('have.text', selectors.alertMessageForMissingUsername);
    cy.url()
      .should('not.be.equal', selectors.baseURL)
      .and('be.equal', selectors.loginPageURL);
  })
})