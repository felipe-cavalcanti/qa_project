import * as selectors from '../support/selectors'

describe('Scenarios related to Page 3 elements', () => {
  beforeEach(() => {
    cy.visit(selectors.thirdPageURL);
  })

const breadcrumbs = ['HOME', 'Page 1', 'Page 2']
const breadcrumbsAnchors = ['#/', '#/page1', '#/page2']

for (let i=0; i < breadcrumbs.length; i++){
    it(`Validating breadcrumb for ${breadcrumbs[i]} is properly displayed`, () => {
      cy.get(selectors.breadcrumbsAnchorsSelectors)
      .eq(i)
      .then(($element) => {
         expect($element).to.have.text(breadcrumbs[i]);
         expect($element).to.have.attr('href', breadcrumbsAnchors[i]);
      })
    })
}

it('Validating breadcrumb Page 3 is properly displayed', () => {
  cy.get(selectors.breadcrumbsClass)
      .last()
      .then(($element) => {
         expect($element).to.have.text('Page 3');
         expect($element).to.not.have.attr('href');
      });
})

})