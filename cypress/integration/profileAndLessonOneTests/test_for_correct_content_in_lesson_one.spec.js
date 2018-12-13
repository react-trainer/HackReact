describe('Lesson one content test', function(){
    it('visits lesson page and test for correct content is rendering', function(){
        cy.visit('http://localhost:3000/lesson/1')
        cy.contains('JSX')
    })
})

//it renders!