describe("clickFirstHotel", function() {

    before(() => {
        cy.visitBooking()
      })

    it('Phuket', function() {
        cy.get('[name=ss]').type('Phuket')
        cy.get('.xp__dates-inner').click({ multiple: true })
        cy.get('.bui-calendar__row:eq(2) > td:eq(3)').click()
        cy.get('.bui-calendar__row:eq(4) > td:eq(6)').click()
        cy.get(".xp__guests").click()
        cy.get('.sb-searchbox__button').click()
    })

    it('firstHostel', function() {
        // cy.get('.sr-hotel__title:eq(0)').invoke('removeAttr', 'target').click()
        // cy.get('.sr-hotel__name:eq(1)').invoke('removeAttr', 'target').click()
        cy.get('.hotel_name_link:eq(1)').should('have.attr', 'target', '_blank').click()
        cy.contains("Risk Free: You can cancel later, so lock in this great price today!")
        .should('be.visible')
        // cy.get('.app-card__content').invoke('removeAttr', 'target').click()
    })

    it('filtres', function() {
        cy.get('[data-id="pri-1"]').click()
        cy.get('[data-id="pri-3"]').click()
        cy.get('[data-id="class-0"]').click()
        cy.get('[data-value="446"]').click()
        cy.get('[data-count="54"]').click()
        cy.get('[data-count="18"]').click()
        cy.get('[data-id=distance-1000]').click()
        cy.get('[data-id=distance-5000]').click()
        cy.get('[data-id=pmt-18]').click()
        cy.get('[data-id=popular_activities-11]').click()
        cy.get('[data-id=popular_activities-82]').click()
        cy.get('[data-id=tdb-2]').click()
        cy.get('[data-id="accessible_room_facilities-131"]').click()
        cy.get('[data-id="accessible_room_facilities-150"]').click()
        cy.get('[data-id="ht_beach-1"]').click()
        cy.get('[data-id="fc-2"]').click()
    })
})

