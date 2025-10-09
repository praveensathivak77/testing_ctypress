class HomePage {
  // ---------- Core Navigation ----------
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
    cy.get("header a img:visible").should("be.visible");
    cy.contains("Our Solutions", { timeout: 10000 }).should("be.visible");
    cy.contains(/Transform|Platform|Marketing/i, { timeout: 15000 }).should("be.visible");
  }

  // ---------- Contact Page ----------
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

  verifyValidationErrors() {
    cy.get(".wpforms-error", { timeout: 10000 }).should("be.visible");
  }

  // ---------- Cookies & Calendly ----------
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

  // ---------- Helpers ----------
  simulateScroll() {
    cy.wait(1000);
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo("top", { duration: 2000 });
  }

  // ---------- Privacy Policy ----------
  viewPrivacyPolicy() {
    cy.get(".wpforms-field-label-inline > a", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible")
      .invoke("removeAttr", "target") // same tab
      .click({ force: true });

    cy.location("pathname", { timeout: 10000 }).should("include", "privacy");

    this.simulateScroll();   // ✅ reuses helper
    this.clickLogo();        // ✅ return home
    this.verifyHomepage();   // ✅ confirm home
  }

  // ---------- Reach Out ----------
 clickReachOut() {
  cy.contains("a.elementor-button.elementor-button-link.elementor-size-sm", "Reach Out", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
}
  verifyReachOutPage() {
    cy.contains(".elementor-heading-title", /get in touch with us/i, { timeout: 15000 })
      .should("be.visible");
  }
  clickLearnmore(){
cy.get('.elementor-element-ad3ce26 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')      .scrollIntoView()
      .should("be.visible")
      .click({ force: true});
  }
  verifyLearnmore() {
    cy.contains(".elementor-heading-title", /We are a trusted partner/i, { timeout: 15000 })
      .should("be.visible");
  }
}

export default HomePage;   // 👈 export class
