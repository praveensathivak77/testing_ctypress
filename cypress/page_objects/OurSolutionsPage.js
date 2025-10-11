class OmnichannelPage {
  // ✅ Hover over "Our Solutions"
  hoverOnOurSolutionsMenu() {
    cy.viewport(1366, 768);
    cy.contains("Our Solutions").should("exist").realHover();
    cy.wait(1500); // slow hover for visibility
  }

  // ✅ Click "Omnichannel Targeting"
  clickOmnichannelMenuItem() {
    cy.log("Clicking Omnichannel Targeting...");
    cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1552 > a', { timeout: 10000 })
      .filter(":visible")
      .click({ force: true });
    cy.wait(1000); // slower wait after click
  }

  // ✅ Click Reachout button
  clickReachoutButton() {
    cy.log("Clicking Reachout button...");
    cy.get(
      '.elementor-element-1b21d01 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text',
      { timeout: 1000 }
    )
      .should("be.visible")
      .click({ force: true });

    cy.wait(1000); // allow time for scroll or animation
  }

  // ✅ Validate Omnichannel Page Content
  validateOmnichannelContent() {
    cy.log("Validating Omnichannel content...");

    // Smoother scroll to center
    cy.scrollTo("center", { duration: 2500 });
    cy.wait(1000);

    cy.contains("Connecting when they love to", { timeout: 15000 }).should("be.visible");
    cy.wait(1500);

    cy.contains("Omnichannel Targeting is playing a pivotal role via", { timeout: 15000 }).should("be.visible");
    cy.wait(1500);

    // Image and assertion
    cy.get('.elementor-element-88c1ed3 > .elementor-widget-container > .attachment-large', { timeout: 15000 })
      .should("be.visible");
    cy.wait(1500);

    cy.contains("Activate campaigns across platforms", { timeout: 15000 }).should("be.visible");
    cy.wait(1500);

    // CTA button click (slower)
    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button', { timeout: 15000 })
      .should("exist")
      .click({ force: true });
    cy.wait(1000);

    // Go back to Omnichannel
    cy.go("back");
    cy.wait(1000);

   // Wait for heading and scroll into view
cy.get('.elementor-element-9053a2a', { timeout: 15000 })
  .scrollIntoView({ duration: 2500 }) // smooth scroll to bring section into view
  .should("be.visible");

cy.wait(4000); // pause to visually confirm position



    // ✅ Click left (active) image 5 times - slow motion
    cy.log("Clicking active slides...");
    for (let i = 0; i < 5; i++) {
      cy.get('.swiper-slide-active > .swiper-slide-inner > .swiper-slide-image', { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });
      cy.wait(1500);
    }

    // ✅ Click right (next) image 5 times - slow motion
    cy.log("Clicking next slides...");
    for (let i = 0; i < 5; i++) {
      cy.get('.swiper-slide-next > .swiper-slide-inner > .swiper-slide-image', { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });
      cy.wait(1500);
    }

    // Validate Trusted Partners section
    cy.contains("Our Trusted Partners", { timeout: 15000 }).should("be.visible");
    cy.wait(2000);

    // Slow scroll to bottom
    cy.scrollTo("bottom", { duration: 2500 });
    cy.wait(2000);
  }
}

export default OmnichannelPage;
