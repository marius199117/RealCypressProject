class Login_Locators {
  get email() { return '#email' }
  get password() { return '#pass' }
  get submitButton() { return '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span' }
  get succesfullyLoggedIn() { return ':nth-child(2) > .greet > .not-logged-in'}
  get invalidLoginCredentials() { return ':nth-child(2) > .greet > .not-logged-in' }
  get invalidUsernamePasswordMessage() { return '.message-error > div' }

}
export default new Login_Locators()