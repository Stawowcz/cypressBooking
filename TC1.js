describe("Login", function() {

    before(() => {
        cy.visitBooking()
      })

    it('Sign in', function() {
        cy.get("#ss").type("London")
        cy.get("#frm > div.xp__fieldset.accommodation >\
         div.xp__dates.xp__group > div.xp__dates-inner").click()
        cy.get("#frm > div.xp__fieldset.accommodation > div.xp__dates.xp__group >\
         div.xp-calendar > div > div > div.bui-calendar__content > div:nth-child(1)\
          > table > tbody > tr:nth-child(3) > td:nth-child(4) > span > span").click()
        cy.get("#frm > div.xp__fieldset.accommodation > div.xp__dates.xp__group >\
         div.xp-calendar > div > div > div.bui-calendar__content > div:nth-child(1) >\
          table > tbody > tr:nth-child(4) > td:nth-child(3) > span > span").click()
        cy.get("#xp__guests__toggle > span.xp__guests__count > span:nth-child(2) > span").click()
        for(let n = 0; n < 4; n ++) {
            cy.get("#xp__guests__inputs-container > div > div >\
         div.sb-group__field.sb-group__field-adults > div >\
          div.bui-stepper__wrapper.sb-group__stepper-a11y >\
           button.bui-button.bui-button--secondary.bui-stepper__add-button > span").click()
        }
        for(let n = 0; n < 2; n ++) {
            cy.get("#xp__guests__inputs-container > div > div >\
             div.sb-group__field.sb-group__field-adults > div >\
              div.bui-stepper__wrapper.sb-group__stepper-a11y >\
               button.bui-button.bui-button--secondary.bui-stepper__subtract-button").click()
        }
        for(let n = 0; n < 4; n ++) {
            cy.get("#xp__guests__inputs-container > div >\
             div > div.sb-group__field.sb-group__field-rooms >\
             div > div.bui-stepper__wrapper.sb-group__stepper-a11y >\
              button.bui-button.bui-button--secondary.bui-stepper__add-button").click()
        }
        for(let n = 0; n < 4; n++) {
            cy.get("#xp__guests__inputs-container > div > div >\
             div.sb-group__field.sb-group__field-rooms > div >\
              div.bui-stepper__wrapper.sb-group__stepper-a11y >\
               button.bui-button.bui-button--secondary.bui-stepper__subtract-button").click()
        }
        cy.contains("Search").click()
    })

    //'class', 'required'
    it('Sign in', function() {
        cy.get("#frm > div.sb-searchbox__row.u-clearfix.-submit.sb-searchbox__footer.-last > div.sb-searchbox-submit-col.-button-messages > div.sb-booker-type-checkbox > label").as("firstDateSelector")
        cy.get('@firstDateSelector').should(function($firstDateSelector) {
            expect($firstDateSelector).to.have.length(1)
            expect($firstDateSelector).to.equal("<label>")
        })
    })
})