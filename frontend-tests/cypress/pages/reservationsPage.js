/// <reference types="cypress" />

// elements
const titleOfReservationsPage = 'Testers Hotel'
const viewButton = ':nth-child(4) > .btn'
const createReservationButton = 'h2 > .btn'
const startTextField = ':nth-child(1) > input'
const endTextField = ':nth-child(2) > input'
const selectClient = ':nth-child(3) > select'
const selectRoom = ':nth-child(4) > select'
const selectBill = ':nth-child(5) > select'
const saveButton = '.blue'
const chooseActionButton = ':nth-child(2) > .action > img'
const deleteButton = '.menu > :nth-child(2)'

// actions / functions

function checkTitleOfReservationsPage(cy) {
    cy.title().should('eq', titleOfReservationsPage)
}

function performCreateReservation(cy, contentToConfirm) {
    cy.get(viewButton).click()
    cy.get(createReservationButton).click()
    cy.get(startTextField).type('2021-12-23')
    cy.get(endTextField).type('2021-12-31')
    cy.get(selectClient).select('Mikael Eriksson (#2)')
    cy.get(selectRoom).select('Floor 1, Room 101')
    cy.get(selectBill).select('ID: 1')
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)

}

function performDeleteReservation(cy, contentToConfirm) {
    cy.get(viewButton).click()
    cy.get(chooseActionButton).click()
    cy.get(deleteButton).click()
    cy.contains(contentToConfirm)

}

// exports
module.exports = {
    checkTitleOfReservationsPage,
    performCreateReservation,
    performDeleteReservation
}