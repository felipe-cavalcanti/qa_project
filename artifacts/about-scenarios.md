# About scenarios

Access `cypress` folder and you'll find `e2e` with the following files:

- login.cy.js
- page_one.cy.js
- page_two.cy.js
- page_three.cy.js

# Login component testing

Inside `login.cy.js` file you'll find the validation scenarios done regarding it: 

- 'Validating user is successfully logged in'
- 'Validating incorrect Password does not lead user to successful login'
- 'Validating incorrect Username does not lead user to successful login'
- 'Validating user is not able to login with both empty Username and Password fields'
- 'Validating user is not able to login with only one of the fields filled'
- 

# Page One components testing

Inside `page_one.cy.js` file you'll find the validation scenarios done regarding it: 

- 'Validating Table headers are properly displayed'
- 'Validating Table data is properly displayed'
- 'Validating Table data is properly sorted descending'
- 'Validating Table data is properly sorted ascending'

# Page Two components testing

Inside `page_two.cy.js` file you'll find the validation scenarios done regarding it: 

- 'Validating Horizontal view mode is selected when user accesses page 2'
- 'Validating Vertical view mode is properly selected by user'
- 'Validating In line view mode is properly selected by user'
- 'Validating Input field with special characters'
- 'Validating Input field with numbers and letters'
- 'Validating Select dropdown menu is properly displayed'
- 'Validating all options are displayed on opened list and user is able to select one of them'
- 'Validating slider behaviour through keyboard'
- 'Validating switch toogle is properly activated/deactivated'

# Page Three components testing

Inside `page_three.cy.js` file you'll find the validation scenarios done regarding it:

- 'Validating breadcrumb for HOME is properly displayed'
- 'Validating breadcrumb for Page 1 is properly displayed'
- 'Validating breadcrumb for Page 2 is properly displayed'
- 'Validating breadcrumb for Page 3 is properly displayed'

Those are the automated tests created!☑️

# Automation report

I was able to generate an automation report using Allure Report plugin as can be seen here:

[Allure Report Generated](../allure_report_example.jpeg)

I already left a report generated in this project for you to evaluate and you can access it by entering `allure-report` folder and opening `index.html` file.However, on `package.json` file you will find the scripts in order to execute and generate them as well. It's pretty simple. All you need to to is to run `npm test` on your terminal and then run `npm run allure:report` and you will see a new Allure Reports folder will be generated. Run `allure open` to see the reports in a beautiful way.

**Note:** If the test report does not open, run the following command on your terminal `npm install -g allure-commandline --save-dev` and try to open them again using command `allure open`.

Let's jump to [Test Plan description documentation](./test-plan.md) to understand how every test was designed and performed.
