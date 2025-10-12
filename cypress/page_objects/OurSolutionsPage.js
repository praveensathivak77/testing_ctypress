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

  clickAICohortMenuItem() {
    cy.log("Clicking AI Cohort Generation...");
    cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1554 > a', { timeout: 10000 })
      .filter(":visible")
      .click({ force: true });
    cy.wait(2000);
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
    cy.contains("Identity Graph").should("be.visible");
    this.clickReachoutButton();
    cy.go("back");
    cy.wait(3000);

    cy.get('.elementor-element-83a5654 > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Unlocking the Full Picture").should("be.visible");

    cy.get('.elementor-element-07a7fc1 > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Insightful AI-Powered Audience Segments").should("be.visible");

    cy.get('.elementor-widget-container > .attachment-large')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Unleash the Power of Unified Customer Data").should("be.visible");

    cy.get('.elementor-element-5c4f6ed > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')
      .click({ force: true });
    cy.wait(3000);
    cy.go("back");
    cy.wait(3000);

    cy.get('.elementor-element-9053a2a')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Our Trusted Partners").should("be.visible");

    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-right').click({ force: true });
      cy.wait(1000);
    }

    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-left').click({ force: true });
      cy.wait(1000);
    }

    cy.scrollTo("bottom", { duration: 2500 });
    cy.wait(2000);
  }

  // ==========================
  // 🔹 AI Cohort Generation Flow
  // ==========================
  validateAICohortSections() {
    cy.contains("AI Cohort Generation").should("be.visible");

    this.clickReachoutButton();
    cy.go("back");
    cy.wait(3000);

    cy.get('.elementor-element-187eb51')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Precision Targeting at Scale").should("be.visible");

    cy.get('.elementor-element-07a7fc1 > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Insightful AI-Powered").should("be.visible");

    cy.get('.elementor-widget-container > .attachment-large')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");

    // ✅ Click video thumbnail and close popup
    cy.log("Opening video popup...");
    cy.get('a > .attachment-large').click({ force: true });
    cy.wait(4000); // wait for popup video to appear

    cy.get('.sgpb-popup-close-button-1', { timeout: 10000 })
      .should("be.visible")
      .click({ force: true }); // close popup
    cy.wait(1500);

    cy.contains("Dynamic Data-Driven").should("be.visible");

    cy.get('.elementor-element-5c4f6ed > .elementor-element > .elementor-widget-container > .attachment-full')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Utilize our cutting-edge").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .click({ force: true });
    cy.wait(2000);
    cy.go("back");

    cy.get('.elementor-element-a38961e > .e-con-inner')
      .scrollIntoView({ duration: 2500 })
      .should("be.visible");
    cy.contains("Our Trusted Partners").should("be.visible");

    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-left').click({ force: true });
      cy.wait(1000);
    }

    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-right').click({ force: true });
      cy.wait(1000);
    }

    cy.scrollTo("bottom", { duration: 2500 });
    cy.wait(2000);
  }

  // ==========================
  // 🔹 Main Flow Runners
  // ==========================
  runOmnichannelFlow() {
    this.validateOmnichannelSections();
  }

  runIdentityGraphFlow() {
    this.validateIdentityGraphSections();
  }

  runAICohortFlow() {
    this.validateAICohortSections();
  }
}

export default OurSolutionsPage;
