class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            recuitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            searchButton: '.oxd-main-menu-search',
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            maintenceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
       cy.get(this.selectorsList().PerformanceButton).click()

    }

     accessRecruitment() {
       cy.get(this.selectorsList().recuitmentButton).click()

    }

         accessTime() {
       cy.get(this.selectorsList().timeButton).click()

    }
    
        accessLeave() {
       cy.get(this.selectorsList().leaveButton).click()

    }

        accessPim() {
       cy.get(this.selectorsList().pimButton).click()

    }

        accessAdmin () {
       cy.get(this.selectorsList().adminButton).click()

    }

        accessSearch () {
       cy.get(this.selectorsList().searchButton).click()

    }

        accessClaim () {
       cy.get(this.selectorsList().claimButton).click()

    }    

        accessMaintence () {
       cy.get(this.selectorsList().maintenceButton).click()

    }    

        accessDirectory () {
       cy.get(this.selectorsList().directoryButton).click()

    }    


  
}

export default MenuPage