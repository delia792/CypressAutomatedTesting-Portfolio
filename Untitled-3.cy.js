
describe('Login Test Success', () => {
    it('Should log in successfully with correct username and password', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user'); 
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        
        cy.get('.inventory_list').should('be.visible');
    });
});
