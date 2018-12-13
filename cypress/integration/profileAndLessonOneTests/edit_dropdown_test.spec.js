describe('Tylers second test', function(){
    it('tests if edit drops down correctly', function(){
        cy.visit('http://localhost:3000/profile')
        cy.pause()
        cy.contains('Edit').click()
        cy.url().should('include', '/profile')
    })
})