/// <reference types="cypress" />

//This is test suite
describe('test suite', function () {

    //these are test cases 

    it('Create new room', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Tester Hotel')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Single')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1000')
        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()
        cy.contains('Rooms')
    })

    it('Delete created room', function () {

        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Rooms')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')
    })

    it('Create new client', function () {
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get('h2 > .btn').click()
        cy.contains('New Client')
        cy.get(':nth-child(1) > input').type('Vera Stepanova')
        cy.get(':nth-child(2) > input').type('stepa.vera@gmail.com')
        cy.get(':nth-child(3) > input').type('0767354625')
        cy.get('.blue').click()
        cy.contains('Clients')


    })

    it('Edit new client', function () {
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        //cy.contains('Client: 4')
        cy.get(':nth-child(5) > input').type('{selectall}{backspace}')
        cy.get(':nth-child(5) > input').type('0739493445')
        cy.get('.blue').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')


    })


    it('Delete created client', function () {
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')


    })

    it('Make a new reservation', function () {
        cy.get(':nth-child(4) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.contains('New Reservation')
        cy.get(':nth-child(1) > input').type('2021-12-23')
        cy.get(':nth-child(2) > input').type('2021-12-31')
        cy.get(':nth-child(3) > select').select('Mikael Eriksson (#2)')
        cy.get(':nth-child(4) > select').select('Floor 1, Room 101')
        cy.get(':nth-child(5) > select').select('ID: 1')
        cy.get('.blue').click()
        cy.contains('Reservations')
        cy.get(':nth-child(3) > .btn').click()

    })

    it('Delete new reservation', function () {
        cy.get(':nth-child(4) > .btn').click()
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Reservations')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')


        





    })






})