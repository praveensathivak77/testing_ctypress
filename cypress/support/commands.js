// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';
// =====================================
// 🧩 Reusable function for external links
// =====================================
Cypress.Commands.add("clickExternalLink", (selector, expectedUrlPart) => {
  cy.get(selector)
    .should("be.visible")
    .should("have.attr", "href")
    .then((href) => {
      cy.log(`🌐 Clicking external link: ${href}`);

      // Remove target="_blank" so Cypress can open it in the same tab
      cy.get(selector).invoke("removeAttr", "target").click();

      // Validate that the URL includes expected domain/text
      if (expectedUrlPart) {
        cy.url({ timeout: 15000 }).should("include", expectedUrlPart);
      }
    });
});
