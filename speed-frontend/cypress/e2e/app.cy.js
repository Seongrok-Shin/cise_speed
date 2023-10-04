describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    // Find a navigator "search" and click it
    cy.get('router.push("/search")').click()
 
    // The new url should include "/search"
    cy.url().should('include', '/search') 
  })
})