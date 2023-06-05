// ***********************************************
// This file aims to store and export all selectors used on test validations
// ***********************************************

export const baseURL = Cypress.config('baseUrl');

//Login Selectors
export const loginPageURL = `${baseURL}sign_in?last_page=/`;
export const loginFormClass = '.login-form';
export const loginUsernameInputID = '#normal_login_username';
export const loginPasswordInputID = '#normal_login_password';
export const loginButtonClass = '.login-form-button'
export const loginAlertMessagesClass = '.ant-form-explain';

//Page One Selectors
export const firstPageURL = `${baseURL}page1`;
export const tableHeadersSelector = '.ant-table-thead th';
export const tableRowsSelector = '.ant-table-tbody tr';
export const tableSorterElementSelector = '.ant-table-column-sorter';

//Page Two Selectors
export const secondPageURL = `${baseURL}page2`;

export const inputHorizontalSelector = 'input[value="horizontal"]';
export const inputVerticalSelector = 'input[value="vertical"]';
export const inputInLineSelector = 'input[value="inline"]';
export const formClass = '.ant-form';
export const inputSelectedExpectedClass = 'ant-radio-button ant-radio-button-checked';
export const inputVerticalExpectedClass = 'ant-form ant-form-vertical';
export const inputHorizontalExpectedClass = 'ant-form ant-form-horizontal';
export const inputInLineExpectedClass = 'ant-form ant-form-inline';
export const inputFieldSelector = 'input[placeholder="Only letters and numbers are allowed"]'
export const selectDropdownMenuSelector = 'div[aria-autocomplete="list"]';
export const selectDropdownListClass = '.ant-select-dropdown';
export const selectDropdownMenuClosedClass = 'ant-select ant-select-enabled ant-select-allow-clear';
export const selectDropdownMenuOpenClass ='ant-select ant-select-open ant-select-focused ant-select-enabled ant-select-allow-clear';
export const selectDropdownListHiddenClass ='ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft  ant-select-dropdown-hidden';
export const selectDropdownListItemsClass = '.ant-select-dropdown-menu-item';
export const selectedListItemClass = '.ant-select-selection-selected-value';
export const sliderHandleClass = '.ant-slider-handle';
export const inputSliderNumberClass = '.ant-input-number-input';
export const switchButtonSelector = 'button[role="switch"]';
export const switchCheckedExpectedClass = 'ant-switch ant-switch-checked ant-switch-disabled';

//Page Three Selectors
export const thirdPageURL = `${baseURL}page3`;
export const breadcrumbsClass = '.ant-breadcrumb-link';
export const breadcrumbsAnchorsSelectors = `${breadcrumbsClass} > a`;

//General Selectors
export const headerAppTitleSelector = '[data-cy="appTitle"]';
export const errorMessageClass = '.error-message';

//Labels
export const errorMessageLabel = 'There was a problem logging in: Login/Password is incorrect';
export const alertMessageForMissingUsername = 'Please input your username.'
export const alertMessageForMissingPassword = 'Please input your Password.'
export const bothAlertMessages = alertMessageForMissingUsername + alertMessageForMissingPassword;
