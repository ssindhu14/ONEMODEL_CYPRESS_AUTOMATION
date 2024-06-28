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
function loginViaAuth0Ui(username, password) {
    // App landing page redirects to Auth0.
    //cy.wait(9000)
    cy.visit('https://onemodel-ui-test.magmutual.com/')
    // Login on Auth0.
    cy.wait(10000)
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.origin(
      'https://magmutual-develop.auth0.com',
      { args: { username, password } },
      ({ username, password }) => {
        //if(cy.get('main.login-id').)
        cy.get('body').then(($body)=>{
          if($body.find('main.login-id').length > 0){
            // auth0 new design
            cy.get('input[name="username"]').type(username)
            cy.get('button._button-login-id').click()
            cy.get('input[name="password"]').type(password, { log: false })
            cy.get("button._button-login-password").click()
          }
          else{
            // auth0 old
            cy.get('input[name="email"]').type(username)
        cy.get('input[name="password"]').type(password, { log: false })
        cy.get(".auth0-lock-submit").click()
          }
        })
      }
    )
    // Ensure Auth0 has redirected us back to the RWA.
    console.log('url ---------->')
    console.log(cy.url())
    cy.url().should('equal', 'https://onemodel-ui-test.magmutual.com/')
    //console.log(cy.url());
  }
  Cypress.Commands.add('loginToAuth0', (username, password) => {
    const log = Cypress.log({
      displayName: 'AUTH0 LOGIN',
      message: [`:closed_lock_with_key: Authenticating | ${username}`],
      // @ts-ignore
      autoEnd: false,
    })
    log.snapshot('before')
    const args = { username, password };
    //cy.get('a[href="/login/"]').click();
    // cy.session(
    //   `auth0-${username}`,
    //   () => {
        loginViaAuth0Ui(username, password);
      // },
      // {
      //   validate: () => {
      //     // Validate presence of access token in localStorage.
      //     cy.window().its("localStorage").invoke("getItem", "authState").should("exist");
      //   },
      // }
    //);
    log.snapshot('after')
    log.end()
  })