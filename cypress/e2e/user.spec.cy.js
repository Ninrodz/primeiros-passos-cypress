import userData from  '../fixtures/users/user-data.json'

describe('Orange HRM Teste', () => {

  const selectorsList = {
    usernameField: "[name= 'username']",
    passwordField: "[name= 'password']",
    loginButton:    "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    sectionTitleTopBar: '.oxd-topbar-header',
    wrongCrendentialAlert: '.oxd-alert',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: ".oxd-input--active",
    dateField:    '[placeholder= "yyyy-dd-mm"]',
    dateCloseButton:  ".--close",
    submmitButton: "[type='submit']",
  }
  


  it.only('User Info Update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastnameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Driverslicenscetest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-28-06')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submmitButton).eq(0).click()
    // cy.get('body').should('contains', 'SuccessFully Update')
    cy.get('.oxd-toast').should('be.visible')
   
 

  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
  })
})