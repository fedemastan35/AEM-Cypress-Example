/// <reference types="cypress"/>

import {SitesPage} from '../../page-objects/sitesPage'

describe('Template sample tests', () => {
    const sitesPage = new SitesPage()

    beforeEach(() => {
        cy.loginByRequest()
    })

    it('should create a new Page', () => {
        cy.visit('/sites.html/content/we-retail/us/en')
        sitesPage.clickOnCreateButton()
        sitesPage.clickOnCreatePage()
        sitesPage.selectHeroTemplate()
        sitesPage.clickOnNext()
        sitesPage.fillInTitleField()
        sitesPage.clickonCreateFromPageWizard()
        sitesPage.clickOnDone()

    })

    it('should delete the recently created page', () => {
        cy.visit('sites.html/content/we-retail/us/en')
        sitesPage.selectThumbnailfromHeroTemplate()
        sitesPage.clickonDelete()
        sitesPage.clickonDeleteConfirmationPopUp()
        
    })


    it('should create a Page via ajax request', () => {
        cy.visit('/sites.html/content/we-retail/us/en')

        var createPage = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:4502/libs/wcm/core/content/sites/createpagewizard/_jcr_content",
            "method": "POST",
            "data": "_charset_=utf-8&parentPath=%2Fcontent%2Fwe-retail%2Fus%2Fen&template=%2Fconf%2Fwe-retail%2Fsettings%2Fwcm%2Ftemplates%2Fproduct-page&template%40Delete=&.%2Fjcr%3Atitle=createdbyajax&pageName=&.%2Fcq%3Atags%40TypeHint=String%5B%5D&.%2Fcq%3Atags%40Delete=&.%2FpageTitle=&.%2FnavTitle=&.%2Fcq%3AredirectTarget=&.%2Fcq%3AredirectTarget%40Delete=&.%2Fsling%3Aalias=&.%2Fcq%3Aconf=&.%2Fcq%3Aconf%40Delete=&.%2FsocialMedia%40Delete=&.%2FsocialMedia%40Delete=&.%2FvariantPath=&.%2FvariantPath%40Delete=&.%2FsocialMedia%40TypeHint=String%5B%5D&%3Acq_csrf_token=eyJleHAiOjE1ODAzMDAzMDYsImlhdCI6MTU4MDI5OTcwNn0.B0VGj2H2jIYfzgVvPhCzN6P0INRL2tBCRqB6aMdASM8"
        }
        Cypress.$.ajax(createPage)
            .then((responseCreatePage) => {
                cy.log("Page created at:", getPathFromHTMLResponse(responseCreatePage));
            })
        cy.reload()

    })

    it('should delete a page via ajax request', () => {
        cy.visit('/sites.html/content/we-retail/us/en');
       
        var deletePage = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:4502/bin/wcmcommand",
            "method": "POST",
            "data": "_charset_=UTF-8&force=false&checkChildren=true&cmd=deletePage&path=%2Fcontent%2Fwe-retail%2Fus%2Fen%2Fcreatedbyajax"
        }

        Cypress.$.ajax(deletePage)
            .then((responseDeletePage) => {
                cy.log("Page deleted at:", getPathFromHTMLResponse(responseDeletePage));
            })
        cy.reload();
    })
})
