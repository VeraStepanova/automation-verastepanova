/// <reference types="cypress" />

// elements
const titleOfRoomsPage = 'Testers Hotel'
const viewButton = ':nth-child(1) > .btn'
const createRoomButton = 'h2 > .btn'
const categorySelectField = ':nth-child(1) > select'
const numberTextField = ':nth-child(2) > input'
const floorTextField = ':nth-child(3) > input'
const availableCheckBox = '.checkbox'
const priceTextField = ':nth-child(5) > input'
const featuresSelectField = ':nth-child(6) > select'
const saveButton = '.blue'
const chooseActionButton = ':nth-child(2) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'

// actions / functions
function checkTitleOfRoomsPage(cy) {
    cy.title().should('eq', titleOfRoomsPage)
}

function performCreateNewRoom(cy) {
    cy.get(viewButton).click()
    cy.get(createRoomButton).click()
    cy.get(categorySelectField).select('Single')
    cy.get(numberTextField).type('103')
    cy.get(floorTextField).type('1')
    cy.get(availableCheckBox).click()
    cy.get(priceTextField).type('1000')
    cy.get(featuresSelectField).select('Balcony')
    cy.get(saveButton).click()

}

function performDeleteRoom(cy) {
    cy.get(viewButton).click()
    cy.get(chooseActionButton).click()
    cy.get(deleteButton).click()
    cy.get(backButton).click()


}

// exports
module.exports = {
    checkTitleOfRoomsPage,
    performCreateNewRoom,
    performDeleteRoom
}