import userData from  '../fixtures/users/user-data.json'

describe('Orange HRM Teste', () => {

  const selectorsList = {
    usernameField: "[name= 'username']",
    passwordField: "[name= 'password']",
    loginButton:    "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    sectionTitleTopBar: '.oxd-topbar-header',
    wrongCrendentialAlert: '.oxd-alert',

  }
  


  it('login - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
  })
})