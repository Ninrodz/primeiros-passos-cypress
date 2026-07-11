class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: ".oxd-input--active",
            dateField:    '[placeholder= "yyyy-dd-mm"]',
            dateCloseButton:  ".--close",
            submmitButton: "[type='submit']",
            messageFinishField: '.oxd-toast',
            genericComboBoxSelect: '.oxd-select-text',
        }

        return selectors
    }

registerName(firstName, lastName) {

    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    cy.get(this.selectorsList().genericField).eq(3).clear().type('Employee')

}

  
}

export default MyInfoPage