/// <reference types="cypress" />

// elements
const titleOfClientsPage = 'Testers Hotel'
const viewButton = '.blocks > :nth-child(2) > .btn'
const createClientButton = 'h2 > .btn'
const nameTextField =':nth-child(1) > input'
const emailTextField =':nth-child(2) > input'
const telephoneTextField = ':nth-child(3) > input'
const saveButton = '.blue'
const chooseActionButton =':nth-child(3) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const editButton = '.menu > :nth-child(1)'
const editTelephoneTextField = ':nth-child(5) > input'

// actions / functions
function checkTitleOfClientsPage(cy){
    cy.title().should('eq', titleOfClientsPage)
}

function performCreateAndDeleteNewClient(cy){
    cy.get(viewButton).click()
    cy.get(createClientButton).click()
    cy.get(nameTextField).type('Vera Stepanova')
    cy.get(emailTextField).type('stepa.vera@gmail.com')
    cy.get(telephoneTextField).type('0767354625')
    cy.get(saveButton).click()
    cy.get(chooseActionButton).click()
    cy.get(deleteButton).click()


}

function performEditClient(cy){
    cy.get(viewButton).click()
    cy.get(createClientButton).click()
    cy.get(nameTextField).type('Vera Stepanova')
    cy.get(emailTextField).type('stepa.vera@gmail.com')
    cy.get(telephoneTextField).type('0767354625')
    cy.get(saveButton).click()
    cy.get(chooseActionButton).click()
    cy.get(editButton).click()
    cy.get(editTelephoneTextField).type('{selectall}{backspace}')
    cy.get(editTelephoneTextField).type('0739493445')
    cy.get(saveButton).click()
    cy.get(chooseActionButton).click()
    cy.get(deleteButton).click()

}


// exports
module.exports = {
    checkTitleOfClientsPage,
    performCreateAndDeleteNewClient,
    performEditClient
}