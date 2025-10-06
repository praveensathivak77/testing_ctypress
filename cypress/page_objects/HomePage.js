class HomePage {
  visit() {
    cy.visit("https://cubera.co/");
  }

  hoverMenu(menu) {
    cy.contains("nav li a", menu, { timeout: 10000 }).realHover();
  }

  clickMenu(menu) {
    cy.contains("nav li a", menu, { timeout: 10000 }).click({ force: true });
  }

  clickLogo() {
    cy.get("header a img:visible", { timeout: 10000 })
      .should("be.visible")
      .first()
      .click({ force: true });
  }

  verifyHomepage() {
    cy.url().should("include", "cubera.co");

    // Logo visible
    cy.get("header a img:visible").should("be.visible");

    // Menu item that always exists
    cy.contains("Our Solutions", { timeout: 10000 }).should("be.visible");

    // Hero text (text-based check instead of fragile CSS)
    cy.contains(/Transform|Platform|Marketing/i, { timeout: 15000 }).should("be.visible");
  }

  navigateToContact() {
    cy.contains("div.ast-custom-button", "Contact Us", { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });
    cy.get("#wpforms-1653", { timeout: 20000 }).should("be.visible");
  }

  safeType(selector, value) {
    cy.get(selector).clear();
    if (value && value.trim() !== "") {
      cy.get(selector).type(value);
    }
  }

  fillContactForm(data) {
    this.safeType("#wpforms-1653-field_1", data.firstName);
    this.safeType("#wpforms-1653-field_2", data.lastName);
    this.safeType("#wpforms-1653-field_3", data.email);
    this.safeType("#wpforms-1653-field_6", data.phone);
    this.safeType("#wpforms-1653-field_4", data.message);

    if (data.product) {
      cy.contains("label", data.product).click({ force: true });
    }

    cy.get('[name="wpforms[fields][7][]"]').check({ force: true });

    cy.get('#wpforms-submit-1653:visible')
      .should("be.enabled")
      .first()
      .click({ force: true });
  }

  verifyCalendlyModal() {
    cy.get("div.calendly-overlay", { timeout: 15000 }).should("be.visible");
  }

  closeCalendlyModal() {
    cy.get("div.calendly-overlay", { timeout: 10000 }).then($overlay => {
      if ($overlay.find('button[aria-label="Close"]').length) {
        cy.get('button[aria-label="Close"]').first().click({ force: true });
      } else if ($overlay.find('button.calendly-close-button').length) {
        cy.get('button.calendly-close-button').first().click({ force: true });
      } else if ($overlay.find('button[title="Close"]').length) {
        cy.get('button[title="Close"]').first().click({ force: true });
      } else {
        cy.log("ℹ️ No Calendly close button found — skipping");
      }
    });
  }

  closeCookies() {
    cy.get("body").then($body => {
      if ($body.find("button.onetrust-close-btn-handler").length) {
        cy.get("button.onetrust-close-btn-handler").first().click({ force: true });
      } else if ($body.find("button:contains('Accept')").length) {
        cy.contains("button", "Accept").first().click({ force: true });
      } else {
        cy.log("No cookie popup found, continuing...");
      }
    });
  }

  verifyValidationErrors() {
    cy.get(".wpforms-error", { timeout: 10000 }).should("be.visible");
  }
}

export default HomePage;
