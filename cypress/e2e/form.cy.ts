describe('Form testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('test custom command ', () => {
    cy.getByData("hero-heading")
        .contains("Testing Next.js Applications with Cypress")
  })

  it("Prihlasit sa do newslettra", () => {
    cy.getByData("email-input").type("dhalvonik@ukf.sk")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist")
        .contains("dhalvonik@ukf.sk")
  })

  it("Neprihlasit sa do newslettra", () => {
    cy.getByData("email-input").type("dhalvonik")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
})