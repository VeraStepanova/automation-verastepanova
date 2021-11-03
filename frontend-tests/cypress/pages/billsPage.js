/// <reference types="cypress" />

// elements
const titleOfBillsPage = 'Testers Hotel'
const viewButton = ':nth-child(3) > .btn'
const createBillButton = 'h2 > .btn'
const valueTextField = 'input'
const paidCheckbox = '.checkbox'
const saveButton = '.blue'
const chooseActionButton = ':nth-child(2) > .action > img'
const deleteButton = '.menu > :nth-child(2)'

// actions / functions
function checkTitleOfBillsPage(cy) {
    cy.title().should('eq', titleOfBillsPage)
}

function performCreateBill(cy) {
    cy.get(viewButton).click()
    cy.get(createBillButton).click()
    cy.get(valueTextField).type('3500')
    cy.get(paidCheckbox).click()
    cy.get(saveButton).click()
}

function performDeleteBill(cy) {
    cy.get(viewButton).click()
    cy.get(chooseActionButton).click()
    cy.get(deleteButton).click()
}


// exports
module.exports = {
    checkTitleOfBillsPage,
    performCreateBill,
    performDeleteBill
}