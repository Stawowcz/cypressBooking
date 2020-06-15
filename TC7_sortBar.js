describe("sortBar", function() {

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

    it("sortBar", function() {
        cy.get('.sort_popularity').click()
        cy.get('.sort_upsort_bh').click()
        cy.get('.sort_price').click()
        cy.get('.sort_review_score_and_price').click()
        cy.get('.sort_class').click()
        cy.get('.sort_suboption_outer:eq(0)').click()
        cy.get('.sort_class').click()
        cy.get('.sort_suboption_outer:eq(1)').click()
        cy.get('[id="sortbar_dropdown_container"]').click()
        cy.get('.sort_class_and_price').click()
        cy.get('[id="sortbar_dropdown_container"]').click()
        cy.get('.sort_distance_from_search').click()
        cy.get('[id="sortbar_dropdown_container"]').click()
        cy.get('.sort_bayesian_review_score').click()
    })
})