#Cypress Automation Testing
##How to install the project

Follow [Guideline](https://projects.netcentric.biz/wiki/display/QA/Cypress).

##Running the tests
###To open cypress 

    npx cypress open

From the test collection select any test and any of the available browsers to execute, or execute them all at once.

###To run the test from terminal 

    npm test

###To run tests to the Cypress Dashboard
To run the tests and have them recorded in the cypress dashboard *(500 tests limit per month)* 
use: 
    
    npm run regressionrecorded

###To run visual validation tests
To run the visual validation tests with percy use 

    npm run percyvisualtest
*(this will only execute a single spec file)*

or

    npm run regressionwithpercy
that will execute the entire suite, also record it in cypress dashboard and compare the visual tests in percy dashboard.

###To run only one test
To run only one test add `.only` to any `it('should test x)` like 

    it.only('should...')

###To skip tests
To skip tests add `.skipt` o any `it('should test x)` like 

    it.skip('should...')


##To test via Ajax requests:

###Why would I need Ajax?
Summary: it is easier, faster and more stable. 

Ajax let's you make a specific **request** *(PUT, POST, DELETE, etc)* directly to the web you are testing.
This way, you can set up "**preconditions**" to your test, and also force a "**clean up**" after your test
has finished.

It is very important for tests to be standalones and to work consistently. Therefore, if you need to make
test of for example to **set up a component** through it's dialog, you need a blank page with a component as 
the "initial situation". 

Afterwards, you need that component to be empty for the next time this same test 
is run. To do that you can use AJAX requests to do it instantly. 

###How do I use Ajax?
Everything *(almost)* in web are requests to the server. Therefore, if you can find the request to the 
behaviour you want, you can copy that request and "make it happen" whenever you need.

#####Find the request
To **find** the request, you need to open DevTools *(the inspector)* and go to the **Network tab**.
Then you need to execute the "**behaviour**" you want in you test page *(for example: add a component in the position you want)*
then you will see that the Network tab gets filled with lots of request. Usually your request will be at
the top of the list. And usually it will be a `POST` request.

#####Copy the request
Once you have found it, you only need to copy it as cURL. *"Right click" -> "Copy" -> "Copy as cURL"*.

#####Import the request to Postman
Postman is a highly powerful program that let's you, among many other things, execute REST requests.

You have to import the copied request. *"Import" (top left) -> "Paste RAW text" -> Paste the cURL -> 
"Import"*

#####Review and export the request as JQuery
Then, you'll have to check if the request headers make sense, it is recomended to try executing it to 
see the response given.

Then find how to export the requeset as Javascript JQuery.

As of now: Find the button *"Code" -> "Javascript JQuery" -> Copy the code*.

#####Use the code snipped in your test.
Your browser and Postman will use their way of auteticating the request. Cypress though, has it's
own way. Therefore, you are going to have to delete the headers of the request you copied

    var settings = {
      "url": "ARequestURL",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Connection": "keep-alive",
        "Whatever": "etc",
      },
    };
Will be:

    var settings = {
      "url": "ARequestURL",
      "method": "GET",
      "timeout": 0,
    };

This headers will automatically be added by Cypress when the request is performed.

Furthermore `$` won't be recognized by Cypress. You need to change:

    $.ajax(settings)
For    

    Cypress.$.ajax(settings)

#####Extra: Notes
You can use both:

    Cypress.$.ajax(settings).done(function (response) {
      ...
    });
And:

    Cypress.$.ajax(settings).then((responseDeleteComponent) => {
        cy.log("A useful Log");
    })
The second one might be best for consistency within the project.