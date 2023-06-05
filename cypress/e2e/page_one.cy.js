import * as selectors from '../support/selectors'

describe('Scenarios related to Page 1 elements', () => {
  beforeEach(() => {
    cy.visit(selectors.firstPageURL);
  })

  const tableHeader = [
    'Name',
    'Borrow',
    'Repayment'
  ]

  const tableDataUnsorted = [
    ['John Brown', '10', '33'],
    ['Jim Green', '100', '0'],
    ['Joe Black', '10', '10'],
    ['Jim Red', '75', '45'],
    ['Milla Pietila', '90', '55'],
    ['Samina Vlasveld', '175', '145'],
    ['Gabrielle Sanchez', '235', '55'],
    ['Stephen Butler', '98', '42'],
    ['Willard Medina', '728', '451'],
    ['Byron Hansen', '328', '109'],
    ['Milla Laine', '203', '78']
  ]

  const tableDataSortedDesc = [
    ['Willard Medina', '728', '451'],
    ['Stephen Butler', '98', '42'],
    ['Samina Vlasveld', '175', '145'],
    ['Milla Pietila', '90', '55'],
    ['Milla Laine', '203', '78'],
    ['John Brown', '10', '33'],
    ['Joe Black', '10', '10'],
    ['Jim Red', '75', '45'],
    ['Jim Green', '100', '0'],
    ['Gabrielle Sanchez', '235', '55'],
    ['Byron Hansen', '328', '109'],
  ]

  const tableDataSortedAsc = [
    ['Byron Hansen', '328', '109'],
    ['Gabrielle Sanchez', '235', '55'],
    ['Jim Green', '100', '0'],
    ['Jim Red', '75', '45'],
    ['Joe Black', '10', '10'],
    ['John Brown', '10', '33'],
    ['Milla Laine', '203', '78'],
    ['Milla Pietila', '90', '55'],
    ['Samina Vlasveld', '175', '145'],
    ['Stephen Butler', '98', '42'],
    ['Willard Medina', '728', '451'],
  ]

  it('Validating Table headers are properly displayed', () => {
    cy.get(selectors.tableHeadersSelector).each(($el, index) => {
      cy.wrap($el).contains(tableHeader[index]);
    });
  });

  it('Validating Table data is properly displayed', () => {
    cy.get(selectors.tableRowsSelector).each(($row, rowIndex) => {
      cy.wrap($row).find('td').each(($cell, cellIndex) => {
        cy.wrap($cell).contains(tableDataUnsorted[rowIndex][cellIndex]);
      });
    });
  });

  it('Validating Table data is properly sorted descending', () => {
    cy.clickOnElement(selectors.tableSorterElementSelector);
    cy.get(selectors.tableRowsSelector).each(($row, rowIndex) => {
      cy.wrap($row).find('td').each(($cell, cellIndex) => {
        cy.wrap($cell).contains(tableDataSortedDesc[rowIndex][cellIndex]);
      });
    })
  });

  it('Validating Table data is properly sorted ascending', () => {
    cy.doubleClickOnElement(selectors.tableSorterElementSelector);
    cy.get(selectors.tableRowsSelector).each(($row, rowIndex) => {
      cy.wrap($row).find('td').each(($cell, cellIndex) => {
        cy.wrap($cell).contains(tableDataSortedAsc[rowIndex][cellIndex]);
      });
    })
  });

})