/// <reference types="cypress" />

//Elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'
const logoutButton = '.user > .btn'

// actions / functions
function checkTitleOfIndexPage(cy) {
    cy.title().should('eq', titleOfIndexPage)
}

function performValidLogin(cy, username, password, contentToConfirm) {
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

function performValidLogout(cy) {
    cy.get(logoutButton).click()
}

// exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin,
    performValidLogout
}
