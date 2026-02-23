import '@testing-library/cypress/add-commands'
import loginPage from '../pages/loginPage';
import { url } from 'node:inspector';
describe('Test Suite Name', ()=>{

    let testData: any;

    before(() => {

    });

    beforeEach(function() {
      cy.clearCookies();
      cy.clearAllSessionStorage;
      cy.viewport("macbook-16");
      cy.fixture('login').then((data)=>{
        testData = data;
      })
    });

    it('TC-001', function() {
      cy.LaunchWebsite('https://www.netflix.com')
    })

    it('TC-002', function ()  {
      
      cy.visit("https://www.netflix.com");
      cy.xpath('//h1[text()="Unlimited movies, shows, and more"]');
      cy.findAllByRole('button', {name: 'Get Started'}).first().should('be.visible')
      cy.wait(4000)
      cy.get('input[type=email]').first().should('be.visible').and('be.enabled').as('inputBox');
      cy.get('@inputBox').type(testData.TC002.emailId)

      
    })

    it.skip('TC-003', ()=>{
        cy.visit("/");
        cy.xpath('//h1[text()="Unlimited movies, shows, and more"]', {timeout:20000});
        cy.xpath('//p[text()="Starts at ₹149. Cancel at any time."]').first().should('be.visible');
        cy.findAllByRole('textbox', {name: 'Email address'}).first().should('be.visible').type('shivamthombare004@getMaxListeners.com');
        cy.findAllByRole('button', {name: 'Get Started'}).first().should('be.visible').click();
    })

    it.only('TC-004', ()=>{
      cy.LaunchWebsite('https://www.netflix.com');
      loginPage.verifyLoginSection();
      loginPage.verifyTrendingSection();

    })
})