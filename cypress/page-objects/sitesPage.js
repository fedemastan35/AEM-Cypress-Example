/// <reference types="cypress"   />

export class SitesPage {
    
    clickOnCreateButton(){
    cy.get('.granite-collection-create').click()
    }
    
    clickOnCreatePage(){
        cy.contains('Page').click()
    }
    
    selectHeroTemplate(){
        cy.get('[data-foundation-collection-item-id="/conf/we-retail/settings/wcm/templates/hero-page"] > .coral3-Card > coral-card-asset > img').click()
    }

    clickOnNext(){
        cy.contains('Next').click()
    }

    fillInTitleField(){
        cy.get('[name="./jcr:title"]').type('Title for Hero Page')
    }

    clickonCreateFromPageWizard(){
        cy.get('div > button:nth-of-type(2)').click()
    }

    clickOnDone(){
        cy.contains('Done').click({ force: true })
    }

    selectThumbnailfromHeroTemplate(){
        cy.get('[data-foundation-collection-item-id="/content/we-retail/us/en/title-for-hero-page"] > coral-columnview-item-thumbnail > .foundation-collection-item-thumbnail').click()
        
    }

    clickonDelete(){
        cy.contains('Delete').click({force:true})
    }

    clickonDeleteConfirmationPopUp(){
        cy.get('[aria-hidden="false"] > .coral3-Dialog-wrapper > .coral3-Dialog-footer > .coral3-Button--warning > coral-button-label').click({ force: true })

    }
}

