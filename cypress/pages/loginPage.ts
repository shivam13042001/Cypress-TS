import { should } from "chai"
import { set } from "cypress/types/lodash";


class loginPage{

    languageOptions = new Set<string>(['en-IN', 'hi-IN'])
    

    verifyLoginSection(){
        cy.get("span[data-uia='nmhp-card-header+logo']").should('be.visible');
        cy.findAllByRole('combobox', {name:'Select Language'}).first().should('be.visible').within(()=>{
            this.languageOptions.forEach((language)=>{
                cy.get(`option[value=${language}]`).should('be.visible')
            })
        })
        cy.findByRole('link', {name:'Sign In'}).should('be.visible')
        cy.findByRole('heading', {name: 'Unlimited movies, shows, and more'}).should('be.visible')
        cy.xpath('//p[text()="Starts at ₹149. Cancel at any time."]').should('be.visible')
        cy.findAllByRole('heading', {name: 'Ready to watch? Enter your email to create or restart your membership.', level: 3, }).should('be.visible')
    }

    verifyTrendingSection(){
        cy.findByRole('heading', {name: 'Trending Now',level: 2}).should('be.visible')
    }

}

export default new loginPage;