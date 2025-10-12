class OurSolutionsPage {
  // ==========================
  // 🔹 Shared Methods
  // ==========================

  hoverOnOurSolutionsMenu() {
    cy.viewport(1366, 768);
    cy.contains("Our Solutions").should("exist").realHover();
    cy.wait(1500);
  }

  clickOmnichannelMenuItem() {
    cy.log("Clicking Omnichannel Targeting...");
    cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1552 > a', { timeout: 10000 })
      .filter(":visible")
      .click({ force: true });
    cy.wait(1500);
  }

  clickIdentityGraphMenuItem() {
    cy.log("Clicking Identity Graph...");
    cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1553 > a', { timeout: 10000 })
      .filter(":visible")
      .click({ force: true });
    cy.wait(1500);
  }

  clickReachoutButton() {
    cy.log("Clicking Reachout button...");
    cy.get('.elementor-element-1b21d01 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button', { timeout: 15000 })
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  // ==========================
  // 🔹 Omnichannel Flow
  // ==========================

  validateOmnichannelSections() {
    cy.scrollTo("center", { duration: 2500 });
    cy.contains("Connecting when they love to").should("be.visible");
    cy.wait(1500);

    cy.contains("Omnichannel Targeting is playing a pivotal role via").should("be.visible");
    cy.wait(1500);

    cy.get('.elementor-element-88c1ed3 > .elementor-widget-container > .attachment-large')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Activate campaigns across platforms").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .click({ force: true });
    cy.wait(2000);
    cy.go("back");
    cy.wait(2000);

    cy.get('.elementor-element-9053a2a')
      .scrollIntoView({ duration: 2500 })
      .should("be.visible");

    for (let i = 0; i < 5; i++) {
      cy.get('.swiper-slide-active > .swiper-slide-inner > .swiper-slide-image')
        .click({ force: true });
      cy.wait(1000);
    }

    for (let i = 0; i < 5; i++) {
      cy.get('.swiper-slide-next > .swiper-slide-inner > .swiper-slide-image')
        .click({ force: true });
      cy.wait(1000);
    }

    cy.contains("Our Trusted Partners").should("be.visible");
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(1500);
  }

  // ==========================
  // 🔹 Identity Graph Flow
  // ==========================

  validateIdentityGraphSections() {
    cy.log("Validating Identity Graph content...");

    // Step 1: Page heading
    cy.contains("Identity Graph").should("be.visible");
    cy.wait(2000);

    // Step 2: Click Reachout, then back
    this.clickReachoutButton();
    cy.go("back");
    cy.wait(3000);

    // Step 3: Unlocking the Full Picture
    cy.get('.elementor-element-83a5654 > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Unlocking the Full Picture").should("be.visible");
    cy.wait(2000);

    // Step 4: Insightful AI-Powered Audience Segments
    cy.get('.elementor-element-07a7fc1 > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Insightful AI-Powered Audience Segments").should("be.visible");
    cy.wait(2000);

    // Step 5: Unleash the Power of Unified Customer Data
    cy.get('.elementor-widget-container > .attachment-large')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Unleash the Power of Unified Customer Data").should("be.visible");
    cy.wait(2000);

    // Step 6: Utilize our tech stack
    cy.get('.elementor-element-5c4f6ed > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");
    cy.wait(2000);

    // Step 7: Click CTA, then back
    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')
      .click({ force: true });
    cy.wait(3000);
    cy.go("back");
    cy.wait(3000);

    // Step 8: Trusted Partners
    cy.get('.elementor-element-9053a2a')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Our Trusted Partners").should("be.visible");

    // Step 9: Carousel
    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-right').click({ force: true });
      cy.wait(1000);
    }
    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-left').click({ force: true });
      cy.wait(1000);
    }

    // Step 10: Footer
    cy.scrollTo("bottom", { duration: 2500 });
    cy.wait(2000);
  }

  // ==========================
  // 🔹 Main Runners
  // ==========================
  runOmnichannelFlow() {
    this.validateOmnichannelSections();
  }

  runIdentityGraphFlow() {
    this.validateIdentityGraphSections();
  }
}

export default OurSolutionsPage;
