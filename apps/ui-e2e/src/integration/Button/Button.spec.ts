describe('ui: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary'));

  it('should render the component', () => {
    cy.findByRole('button', { name: 'Button' }).should('exist');
  });
});
