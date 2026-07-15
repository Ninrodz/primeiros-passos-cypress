import userData from  '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Teste', () => {


  it.only('User Info Update - success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboard()

    menuPage.accessMyInfo()

    myInfoPage.fillRegisterName(chance.first(),chance.name(),chance.last())

    myInfoPage.fillEmployeeDetails(chance.integer({ min: 12225, max: 20000 }),
    chance.integer({ min: 2133, max: 3227 }),
    chance.integer({ min: 2513, max: 35227 }),'1993-12-20',)

    myInfoPage.fillStatus()
    myInfoPage.saveForm()

    
 
   
 

  })

})