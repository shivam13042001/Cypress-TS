import '@testing-library/cypress/add-commands'
describe('Test Suite Name', ()=>{

    before(()=>{
        
    })

    beforeEach(()=>{
        cy.clearCookies();
        cy.clearAllSessionStorage
        cy.viewport('macbook-16')
        
    })


    it('Test case', ()=>{
        cy.visit("https://www.netflix.com");
        cy.xpath('//h1[text()="Unlimited movies, shows, and more"]')

    })

    it('Test case-2', ()=>{
        
        cy.visit("https://www.netflix.com");
        cy.xpath('//h1[text()="Unlimited movies, shows, and more"]', {timeout:20000});
        cy.xpath('//p[text()="Starts at ₹149. Cancel at any time."]').first().should('be.visible');
        cy.findAllByRole('textbox', {name: 'Email address'}).first().should('be.visible').type('shivamthombare004@getMaxListeners.com');
        cy.findAllByRole('button', {name: 'Get Started'}).first().should('be.visible').click();

    })
})