import userData from  '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Teste', () => {

  const selectorsList = {

    
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: ".oxd-input--active",
    dateField:    '[placeholder= "yyyy-dd-mm"]',
    dateCloseButton:  ".--close",
    submmitButton: "[type='submit']",
    messageFinishField: '.oxd-toast',
    genericComboBoxSelect: '.oxd-select-text',
  }
  


  it.only('User Info Update - success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboard()

    menuPage.accessMyInfo()

    myInfoPage.registerName('firstName','lastName')

    
  
    // cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    // cy.get(selectorsList.genericField).eq(4).clear().type('IdTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('Driverslicenscetest')
    // cy.get(selectorsList.dateField).eq(0).clear().type('2026-28-06')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericComboBoxSelect).eq(0).click()
    // cy.contains('Bahamian').click()
    // cy.get(selectorsList.genericComboBoxSelect).eq(1).click()
    // cy.contains('Single').click()
    // cy.get(selectorsList.genericComboBoxSelect).eq(2).click()
    // cy.contains('O+').click()
    // cy.get(selectorsList.submmitButton).eq(0).click({force: true})
    // cy.get(selectorsList.messageFinishField).should('be.visible')
    
   
 

  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
  })
})