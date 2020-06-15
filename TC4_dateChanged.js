describe("dateChanged", function() {

    before(() => {
        cy.visitBooking()
      })

    it('London', function() {
        cy.get('[name=ss]').type('London')
        cy.get('.xp__dates-inner').click({ multiple: true })
        cy.get('.bui-calendar__row:eq(2) > td:eq(3)').click()
        cy.get('.bui-calendar__row:eq(4) > td:eq(6)').click()
        cy.get(".xp__guests").click()
        cy.get('.sb-searchbox__button').click()
    })

    it('Date changes', function() {
        cy.get('.sb-date-field__display:eq(0)').click()
        cy.wait(1000)
        cy.get('.c2-month-table > tbody > tr:eq(3) > td:eq(3)').click()
        cy.get('.c2-month-table > tbody > tr:eq(6) > td:eq(2)').click({force: true})
        cy.get('.sb-date-field__display:eq(1)').click()
        cy.wait(1000)
        cy.get('.c2-month-table > tbody > tr:eq(4) > td:eq(2)').click({force: true})
        cy.get('.c2-month-table > tbody > tr:eq(6) > td:eq(2)').click({force: true})
    })
})