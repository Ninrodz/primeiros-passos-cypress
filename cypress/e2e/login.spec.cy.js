describe('Orange HRM Teste', () => {

  const selectorsList = {
    usernameField: "[name= 'username']",
    passwordField: "[name= 'password']",
    loginButton:    "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header',
    wrongCrendentialAlert: '.oxd-alert',

  }



  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
  })
})