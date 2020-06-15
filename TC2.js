describe("Login", function() {

    before(() => {
        cy.visitBooking()
      })

    it('London', function() {
        cy.get("#ss").type("London")
        // cy.get(".c-autocomplete__input").type("London")
        // cy.get('input[id=ss]').type("london")
        // cy.get('input[id=ss][value=""]').type("londonek")
        // cy.get('input[name=ss]').type('kuba')
        // cy.get('[name=ss]').type('londynekkkkk')
        // cy.get('.sb-destination-label-sr > #ss').type("pioreeee")
        // div.bui-calendar__wrapper:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(4) > span:nth-child(1)
        // "bui-calendar__dates > tbody:eq(0)[aria-label="
        cy.get('.xp__dates-inner').click({ multiple: true })
        cy.get('.bui-calendar__control--next').click()
        cy.get('.bui-calendar__control--prev').click()
        cy.get('.bui-calendar__row:eq(2) > td:eq(3)').click()
        // cy.get('.bui-calendar__row:eq(2) > td:eq(4)').click()
        cy.get('.bui-calendar__row:eq(4) > td:eq(6)').click()
        cy.get(".xp__guests").click()

 
        for (let i=0; i<3; i++) {
            cy.get(".bui-stepper__add-button:eq(" + i.toString() + ")").click()
            cy.get(".bui-stepper__add-button:eq(" + i.toString() + ")").click()
        }

        for (let i=0; i<3; i++) {
            cy.get(".bui-stepper__subtract-button:eq(" + i.toString() + ")").click()
        }

        for (let i = 1; i>-1; i--) {
            cy.get("[aria-describedby='group_adults_desc']:eq(" + i.toString() + ")").click()
        }

        for (let i = 1; i>-1; i--) {
            cy.get("[aria-describedby='group_children_desc']:eq(" + i.toString() + ")").click()
        }

        for (let i = 1; i<2; i++) {
            cy.get("[aria-describedby='group_children_desc']:eq(" + i.toString() + ")").click()
            cy.get("[aria-describedby='group_children_desc']:eq(" + i.toString() + ")").click()
        }

        for (let i = 1; i>-1; i--) {
            cy.get("[aria-describedby='no_rooms_desc']:eq(" + i.toString() + ")").click()
        }

        // var x = document.getElementsByClassName(".sb-group__children__field clearfix").length;
        // cy.log(x)
        // cy.get(".sb-group__children__field >select:eq(0)").select('0')

        cy.get('[name="age"]:eq(0)').select('0')
        cy.get('[name="age"]:eq(1)').select('1')
        cy.get('[name="age"]:eq(2)').select('12')

        // cy.get('button[type=submit][data-sb-id=main]').click()
        // cy.get('.sb-searchbox__button > span').click()
        // cy.get('.sb-searchbox__button').click()
        // cy.get('data-sb-id=main').click()
        cy.get('[type=submit][data-sb-id=main]').click()
        

    })
})