class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton:  ".--close",
            submmitButton: "[type='submit']",
            messageFinishField: '.oxd-toast',
            genericComboBoxSelect: '.oxd-select-text',
        }

        return selectors
    }

    fillRegisterName(firstName, lastName,) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetails(Employee,IdTest,Driverslicenscenumber,expiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(Employee)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(IdTest)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(Driverslicenscenumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    saveForm(){
        cy.get(this.selectorsList().submmitButton).eq(0).click({force: true})
        cy.get(this.selectorsList().messageFinishField).should('be.visible')
    }
    
    fillStatus(){
        cy.get(this.selectorsList().genericComboBoxSelect).eq(0).click()
        cy.contains('Bahamian').click()
        cy.get(this.selectorsList().genericComboBoxSelect).eq(1).click()
        cy.contains('Single').click()
        cy.get(this.selectorsList().genericComboBoxSelect).eq(2).click()
        cy.contains('O+').click()
    }
  
}

export default MyInfoPage