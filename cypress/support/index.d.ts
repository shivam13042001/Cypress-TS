declare namespace Cypress{
    interface Chainable{
        LaunchWebsite(url: string): Chainable<void>
    }
}