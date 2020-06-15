describe("cityChanged", function() {

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

    it('Berlin-Koh Phangan', function() {
        cy.get('input[name=ss]').clear().type("Berlin")
        cy.get('input[id=ss]').clear().type("Phuket")
        cy.get('.c-autocomplete__input').clear().type("Koh Samui")
        cy.get('.sb-destination__input').clear().type("Koh Phangan")
        cy.wait(1000)
        cy.get('.c-autocomplete__list:eq(0)').click()
    })

})