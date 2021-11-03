/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as reservationsFuncs from '../pages/reservationsPage'
import * as billsFuncs from '../pages/billsPage'
import * as targets from '../targets/targets'


// Test suite
describe('Test Suite', function () {
    this.beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })
    this.afterEach(function () {
        indexFuncs.performValidLogout(cy)
    })

    // Test cases
    it('Create new room', function () {
        roomsFuncs.checkTitleOfRoomsPage(cy, 'Testers Hotel')
        roomsFuncs.performCreateNewRoom(cy)
    })

    it('Delete room', function() {
        roomsFuncs.performDeleteRoom(cy)
    })

    it('Create new client', function () {
        clientsFuncs.performCreateNewClient(cy)
    })

    it('Edit client', function () {
        clientsFuncs.performEditClient(cy)
    })

    it('Delete client', function () {
        clientsFuncs.performDeleteClient(cy)
    })

    it('Create new reservation', function () {
        reservationsFuncs.checkTitleOfReservationsPage(cy, 'Testers Hotel')
        reservationsFuncs.performCreateReservation(cy)
    })

    it('Delete reservation', function () {
        reservationsFuncs.performDeleteReservation(cy)
    })


    it('Create new bill', function () {
        billsFuncs.checkTitleOfBillsPage(cy, 'Testers Hotel')
        billsFuncs.performCreateBill(cy)
    })

    it('Delete bill', function () {
        billsFuncs.performCreateBill(cy)
    })


})