/// <reference types="cypress"/>

import {AuthorLoginPage} from '../../page-objects/authorLoginPage'
 
describe('AuthorLogin', () => {
    const authorLoginPage = new AuthorLoginPage()
    
  it('should fail to login', () =>{
    authorLoginPage.navigateToLoginPage()
    cy.get('#username').type('username')
    cy.get('#password').type('password')
    authorLoginPage.clickOnSubmit()
    authorLoginPage.validateCredentialsAlert()
  })

  it('should login to Author', () => {
    authorLoginPage.navigateToLoginPage()
    cy.get('#username').type(Cypress.env('USER'))
    cy.get('#password').type(Cypress.env('PASS'))
    authorLoginPage.clickOnSubmit()
    authorLoginPage.validateStartScreen() 
    })
})