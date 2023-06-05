import * as selectors from '../support/selectors'
import * as utils from '../fixtures/utils.json';

describe('Scenarios related to Page 2 elements', () => {
  beforeEach(() => {
    cy.visit(selectors.secondPageURL);
  })

  const menuListOption = ['Australia',
    'Brazil',
    'Canada',
    'Denmark',
    'Egypt',
    'France',
    'Germany',
    'Hungary',
    'Italy',
    'Japan',
    'Mexico',
    'New Zeland',
    'Portugal',
    'Russia',
    'South Africa',
    'Thailand',
    'United States'];

  it('Validating Horizontal view mode is selected when user accesses page 2', () => {
    cy.getViewModeInput(selectors.inputHorizontalSelector)
      .then(($input) => {
        expect($input).to.have.attr('class', selectors.inputSelectedExpectedClass);
      })
    cy.get(selectors.formClass)
      .should('have.attr', 'class', selectors.inputHorizontalExpectedClass)
      .and('not.have.attr', 'class', selectors.inputVerticalExpectedClass)
      .and('not.have.attr', 'class', selectors.inputInLineExpectedClass);
  })

  it('Validating Vertical view mode is properly selected by user', () => {
    cy.selectViewMode(selectors.inputVerticalSelector)
      .then(($input) => {
        expect($input).to.have.attr('class', selectors.inputSelectedExpectedClass);
      })
    cy.get(selectors.formClass)
      .should('have.attr', 'class', selectors.inputVerticalExpectedClass)
      .and('not.have.attr', 'class', selectors.inputHorizontalExpectedClass)
      .and('not.have.attr', 'class', selectors.inputInLineExpectedClass);
  })

  it('Validating In line view mode is properly selected by user', () => {
    cy.selectViewMode(selectors.inputInLineSelector)
      .then(($input) => {
        expect($input).to.have.attr('class', selectors.inputSelectedExpectedClass);
      })
    cy.get(selectors.formClass)
      .should('have.attr', 'class', selectors.inputInLineExpectedClass)
      .and('not.have.attr', 'class', selectors.inputVerticalExpectedClass)
      .and('not.have.attr', 'class', selectors.inputHorizontalExpectedClass);
  })

  it('Validating Input field with special characters', () => {
    cy.accessInputAndType(selectors.inputFieldSelector, utils.specialCharacters);
    cy.get(selectors.errorMessageClass)
      .should('exist');
  });

  it('Validating Input field with numbers and letters', () => {
    cy.accessInputAndType(selectors.inputFieldSelector, utils.randomLettersAndNumbers);
    cy.get(selectors.errorMessageClass)
      .should('not.exist');
  });

  it('Validating Select dropdown menu is properly displayed', () => {
    cy.get(selectors.selectDropdownMenuSelector)
      .parent()
      .should('have.attr', 'class', selectors.selectDropdownMenuClosedClass);
    cy.clickOnElement(selectors.selectDropdownMenuSelector)
    cy.get(selectors.selectDropdownMenuSelector)
      .parent()
      .should('not.have.attr', 'class', selectors.selectDropdownMenuClosedClass)
      .and('have.attr', 'class', selectors.selectDropdownMenuOpenClass);
    cy.get(selectors.selectDropdownListClass)
      .should('not.have.attr', 'class', selectors.selectDropdownListHiddenClass);
  });

  it('Validating all options are displayed on opened list and user is able to select one of them', () => {
    let itemIndex = 0;
    cy.clickOnElement(selectors.selectDropdownMenuSelector)
    cy.get(selectors.selectDropdownListItemsClass).each(($option, optionIndex) => {
      cy.wrap($option).contains(menuListOption[optionIndex]);
    });
    cy.selectListItem(selectors.selectDropdownListItemsClass, itemIndex)
    cy.get(selectors.selectedListItemClass)
      .should('have.text', menuListOption[itemIndex]);
  });

  it('Validating slider behaviour through keyboard', () => {
    let initialValue = 1;
    let valueAfterRigthArrow = 2;
    let valueTyped = 5;
    cy.clickOnElement(selectors.sliderHandleClass)
    cy.get(selectors.sliderHandleClass)
      .should('have.attr','aria-valuenow', initialValue)
      .type('{rightArrow}')
      .then(($slider) => {
        expect($slider).to.have.attr('aria-valuenow', valueAfterRigthArrow);
      });
    cy.accessInputAndType(selectors.inputSliderNumberClass, valueTyped);
    cy.get(selectors.sliderHandleClass)
      .should('have.attr','aria-valuenow', valueTyped);
  });

  it('Validating switch toogle is properly activated/deactivated', () => {
    cy.get(selectors.switchButtonSelector)
      .should('have.attr','aria-checked', 'false');
    cy.clickOnElement(selectors.switchButtonSelector);
    cy.get(selectors.switchButtonSelector)
      .then(($switchButton) => {
         expect($switchButton).to.have.attr('aria-checked', 'true')
         expect($switchButton).to.have.attr('class', selectors.switchCheckedExpectedClass)
      })
    cy.clickOnElement(selectors.switchButtonSelector);
    cy.get(selectors.switchButtonSelector)
      .then(($switchButton) => {
         expect($switchButton).to.have.attr('aria-checked', 'false')
         expect($switchButton).to.not.have.attr('class', selectors.switchCheckedExpectedClass)
      })
  });

})
