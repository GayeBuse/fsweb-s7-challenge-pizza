describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/pizza');
  });

  it('boyut seçimi yapmalaı', () => {
    //arrange
    cy.visit('http://localhost:3000/pizza');
    //act

    cy.get('[data-cy="size-select"]').click(); // Corrected selector for data-cy attribute

    // assert
   
  });
});