describe('Lesson one iframe test', function(){
    it('visits lesson page and test for correct codesandbox.io', function(){
        cy.visit('http://localhost:3000/dashboard/lessons')
        // cy.window.click('topRight')
        cy.contains('Lesson 1').click()
        cy.contains('Click anywhere to start!')
    })
})