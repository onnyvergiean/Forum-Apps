/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^Sign In$/)
      .should('be.visible');
  });

  it('should display alert when username is empty', () => {
    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');

    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('testuser@gmail.com');
    cy.get('input[placeholder="Password"').type('testpassword');

    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display homepage when email dan password are correct', () => {
    cy.get('input[placeholder="Email"]').type('ok@ok.com');
    cy.get('input[placeholder="Password"]').type('123456');

    cy.get('button')
      .contains(/^Sign In$/)
      .click();

    cy.get('button')
      .contains(/^Logout$/)
      .should('be.visible');
  });
});
