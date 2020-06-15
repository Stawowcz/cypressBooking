describe("familyMembersCHanged", function() {

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


    it('familyMembersChanged', function() {
        cy.get('select[id=group_adults]').select('1')
        cy.get('[id=group_adults]').select('2')
        cy.get('[name=group_adults]').select('3')
        cy.get('select[name=group_adults]').select('4')

        cy.get('select[id=group_children]').select('1')
        cy.get('[id=group_children]').select('2')
        cy.get('[name=group_children]').select('3')
        cy.get('select[name=group_children]').select('4')

        cy.get('select[id=no_rooms]').select('1')
        cy.get('[id=no_rooms]').select('2')
        cy.get('[name=no_rooms]').select('3')
        cy.get('select[name=no_rooms]').select('4')

        cy.get('[data-group-child-age=0]').select('2')
        cy.get('[data-group-child-age=1]').select('4')
        cy.get('[data-group-child-age=2]').select('6')

        cy.get('[name=age]:eq(0)').select('1')
        cy.get('[name=age]:eq(1)').select('2')
        cy.get('[name=age]:eq(2)').select('3')
        cy.get('[name=age]:eq(3)').select('3')

        cy.get('select[name=age]:eq(0)').select('17')
        cy.get('select[name=age]:eq(1)').select('17')
        cy.get('select[name=age]:eq(2)').select('16')
        cy.get('select[name=age]:eq(3)').select('12')

        // cy.get('input[name=sb_travel_purpose][type=checkbox][value=business]').click()
        // cy.get('[class=sb-searchbox__button]').click()
        cy.get('button[type=submit]').click()
    
    })

})