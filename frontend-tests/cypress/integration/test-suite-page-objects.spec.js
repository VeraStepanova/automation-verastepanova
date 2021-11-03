/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as reservationsFuncs from '../pages/reservationsPage'
import * as billsFuncs from '../pages/billsPage'
import * as targets from '../targets/targets'



// Test suite
describe ('Test Suite', function(){
    this.beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')

    })

    this.afterEach(function(){
        indexFuncs.performValidLogout(cy)

    })

    // Test cases

    it('Create and delete new room', function(){
        roomsFuncs.checkTitleOfRoomsPage(cy, 'Testers Hotel')
        roomsFuncs.performCreateAndDeleteNewRoom(cy)        
    })  
    
    it('Create and delete new client', function(){
        clientsFuncs.checkTitleOfClientsPage(cy, 'Testers Hotel')
        clientsFuncs.performCreateAndDeleteNewClient(cy)

    })

    it('Edit telephone number of new client', function(){
        clientsFuncs.checkTitleOfClientsPage(cy, 'Testers Hotel')
        clientsFuncs.performEditClient(cy)

    })

    it('Create new client', function(){
        reservationsFuncs.checkTitleOfReservationsPage(cy, 'Testers Hotel')
        reservationsFuncs.performCreateReservation(cy)
        reservationsFuncs.performDeleteReservation(cy)

    })

    it('Create new bill', function(){
        billsFuncs.checkTitleOfBillsPage(cy, 'Testers Hotel')
        billsFuncs.performCreateBill(cy)
    })



})