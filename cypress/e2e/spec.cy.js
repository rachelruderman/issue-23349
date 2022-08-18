/// <reference types="cypress" />
describe('page', () => {
  it('works without json params', () => {
    cy.intercept('https://google.com*').as('google')
    cy.visit('https://google.com')
    cy.wait('@google')

  })

  // this test fails
  it('works with json params', () => {
    cy.intercept('https://google.com*').as('google')
    cy.visit('https://google.com?json={"key":"value"}')
    cy.wait('@google')
  })
})
