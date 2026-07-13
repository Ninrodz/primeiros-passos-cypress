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


  it.only('User Info Update - success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboard()

    menuPage.accessMyInfo()

    myInfoPage.fillRegisterName('firstName','lastName')
    myInfoPage.fillEmployeeDetails('EmployeeId','idtest','23123','1993-12-20',)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

    
 
   
 

  })

})