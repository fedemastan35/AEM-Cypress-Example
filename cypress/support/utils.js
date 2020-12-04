

export function getPathFromHTMLResponse(response){
    var el = document.createElement( 'html' );
    el.innerHTML = response;
    return el.getElementsByTagName( 'a' )["0"].text;
}

export function publishViaUI (){
    var menuButton = '//coral-icon[@class="coral3-Icon coral3-Icon--sizeS coral3-Icon--properties"]';
    var publishButton = '.cq-authoring-actions-quickpublish-activator';
    cy.reload()
    cy.xpath(menuButton).click()
    cy.get(publishButton).click()
}