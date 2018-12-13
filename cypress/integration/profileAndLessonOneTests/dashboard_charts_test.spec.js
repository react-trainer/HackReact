describe('Does the dashboard have graphs', function(){
    it('tests if the dashboard renders correctly', function(){
        cy.visit('http://localhost:3000/profile')
        cy.pause()
        cy.contains('Work Completed')
        cy.contains('Login Time')
        cy.contains('Completed Lessons')
        cy.url().should('include', '/profile')
    })
})