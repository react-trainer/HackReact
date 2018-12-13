describe('Does Edit change to Finish everytime?', function(){
    it('tests if Edit changes to Finish', function(){
        cy.visit('http://localhost:3000/profile')
        cy.contains('Edit').click()
        cy.contains('Finish')
    })
})