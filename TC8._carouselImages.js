describe("carouselImages", function() {

    before(() => {
        cy.visitBooking()
    })

    it('Hotels', function() {
        // cy.get(".bui-card__image:eq(0)").click()
        for (let i = 0; i < 27; i++) {
            cy.get('.bui-carousel__next:eq(0)').click();
          }
    })


})