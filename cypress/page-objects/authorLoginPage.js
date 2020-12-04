/// <reference types="cypress"   />

export class AuthorLoginPage {
    
    validateStartScreen(){
        cy.get('coral-shell-homeanchor-label').should('have.text', 'Adobe Experience Manager')
    }

    validateSitesScreen(){
        cy.get('[data-foundation-collection-item-id="/mnt/overlay/cq/core/content/nav/sites"] > .foundation-collection-navigator')
    }

    validateCredentialsAlert(){
        cy.get('#error')
        .should('be.visible')
        .should('include.text', 'User name and password do not match')
    }

    navigateToLoginPage(){
        cy.visit('/libs/granite/core/content/login.html?resource=%2F&$$login$$=%24%24login%24%24&j_reason=unknown&j_reason_code=unknown') 
    }

    clickOnSubmit(){
    cy.get('#submit-button').click()
    }
}
