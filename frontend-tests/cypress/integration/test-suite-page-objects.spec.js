/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as reservationsFuncs from '../pages/reservationsPage'
import * as billsFuncs from '../pages/billsPage'



// Test suite
describe ('Test Suite', function(){
    this.beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')

    })

    this.afterEach(function(){
        cy.get('.user > .btn').click()

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

    it('create new bill', function(){
        billsFuncs.checkTitleOfBillsPage(cy, 'Testers Hotel')
        billsFuncs.performCreateBill(cy)
    })



})