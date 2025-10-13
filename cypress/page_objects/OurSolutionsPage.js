class OurSolutionsPage {
  // ==========================
  // 🔹 Shared Utilities
  // ==========================
  hoverOnOurSolutionsMenu() {
    cy.viewport(1366, 768);
    cy.contains("Our Solutions").should("exist").realHover();
    cy.wait(1500);
  }

  clickMenuItem(selector, name) {
    cy.log(`Clicking ${name}...`);
    cy.get(selector, { timeout: 10000 }).filter(":visible").click({ force: true });
    cy.wait(2000);
  }

  clickReachoutButton() {
    cy.get('.elementor-element-1b21d01 .elementor-button', { timeout: 15000 })
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    cy.go("back");
    cy.wait(2000);
  }

  handleVideoPopup(imageSelector, closeSelector) {
    cy.get(imageSelector).scrollIntoView({ duration: 2000 }).should("be.visible");
    cy.get('a > .attachment-large').click({ force: true });
    cy.wait(3500);
    cy.get(closeSelector, { timeout: 10000 }).click({ force: true });
    cy.wait(1500);
  }

  handleCarouselArrows(leftSelector, rightSelector, count = 6) {
    for (let i = 0; i < count; i++) {
      cy.get(leftSelector).click({ force: true });
      cy.wait(800);
    }
    for (let i = 0; i < count; i++) {
      cy.get(rightSelector).click({ force: true });
      cy.wait(800);
    }
  }

  assertSection(containsText, selector = null) {
    if (selector) cy.get(selector).scrollIntoView({ duration: 2000 }).should("be.visible");
    cy.contains(containsText, { timeout: 15000 }).should("be.visible");
  }

  // ==========================
  // 🔹 Menu Clicks
  // ==========================
  clickOmnichannelMenuItem() {
    this.clickMenuItem('.menu-item-1552 > a', "Omnichannel Targeting");
  }
  clickIdentityGraphMenuItem() {
    this.clickMenuItem('.menu-item-1553 > a', "Identity Graph");
  }
  clickAICohortMenuItem() {
    this.clickMenuItem('.menu-item-1554 > a', "AI Cohort Generation");
  }
  clickAdServiceMenuItem() {
    this.clickMenuItem('.menu-item-1555 > a', "Ad Service");
  }
  clickForPublishersMenuItem() {
    this.clickMenuItem('.menu-item-1556 > a', "For Publishers");
  }

  // ==========================
  // 🔹 Omnichannel Flow
  // ==========================
  validateOmnichannelSections() {
    cy.scrollTo("center");
    this.assertSection("Connecting when they love to");
    this.assertSection("Omnichannel Targeting is playing a pivotal role via");
    this.assertSection("Activate campaigns across platforms", '.elementor-element-88c1ed3 img');
    cy.get('.elementor-element-3c2f63f .elementor-button').click({ force: true });
    cy.go("back");

    this.assertSection("Our Trusted Partners", '.elementor-element-9053a2a');
    this.handleCarouselArrows('.e-eicon-chevron-left', '.e-eicon-chevron-right', 5);
    cy.scrollTo("bottom");
  }

  // ==========================
  // 🔹 Identity Graph Flow
  // ==========================
  validateIdentityGraphSections() {
    this.assertSection("Identity Graph");
    this.clickReachoutButton();
    this.assertSection("Unlocking the Full Picture", '.elementor-element-83a5654 img');
    this.assertSection("Insightful AI-Powered Audience Segments");
    this.assertSection("Unleash the Power of Unified Customer Data");
    this.assertSection("Utilize our cutting-edge, adaptable tech stack");
    cy.get('.elementor-element-3c2f63f .elementor-button').click({ force: true });
    cy.go("back");
    this.assertSection("Our Trusted Partners", '.elementor-element-9053a2a');
    this.handleCarouselArrows('.e-eicon-chevron-right', '.e-eicon-chevron-left');
    cy.scrollTo("bottom");
  }

  // ==========================
  // 🔹 AI Cohort Flow
  // ==========================
  validateAICohortSections() {
    this.assertSection("AI Cohort Generation");
    this.clickReachoutButton();
    this.assertSection("Precision Targeting at Scale", '.elementor-element-187eb51');
    this.assertSection("Insightful AI-Powered");
    this.handleVideoPopup('.elementor-widget-container > .attachment-large', '.sgpb-popup-close-button-1');
    this.assertSection("Dynamic Data-Driven");
    this.assertSection("Utilize our cutting-edge", '.elementor-element-5c4f6ed img');
    cy.get('.elementor-element-3c2f63f .elementor-button').click({ force: true });
    cy.go("back");
    this.assertSection("Our Trusted Partners", '.elementor-element-a38961e');
    this.handleCarouselArrows('.e-eicon-chevron-left', '.e-eicon-chevron-right');
    cy.scrollTo("bottom");
  }

  // ==========================
  // 🔹 Ad Service Flow
  // ==========================
  validateAdServiceSections() {
    this.clickReachoutButton();
    this.assertSection("Ad Services to Suit Your Way", '.elementor-element-83a5654 img');
    this.assertSection("Effortless Precision Ads for Ultimate Success", '.elementor-element-34603dc');
    this.handleVideoPopup('.elementor-widget-container > .attachment-large', '.sgpb-popup-close-button-1');
    this.assertSection("Skyrocket your ROAS with us");
    this.assertSection("Utilize our cutting-edge, adaptable tech stack", '.elementor-element-7b5bfab');
    cy.get('.elementor-element-3c2f63f .elementor-button').click({ force: true });
    cy.go("back");
    this.assertSection("Our Trusted Partners", '.elementor-element-a38961e');
    this.handleCarouselArrows('.e-eicon-chevron-left', '.e-eicon-chevron-right');
    cy.scrollTo("bottom");
  }

  // ==========================
  // 🔹 For Publishers Flow
  // ==========================
  validateForPublishersSections() {
    this.assertSection("For Publishers");
    this.clickReachoutButton();
    this.assertSection("Maximize Revenue from Inventory", '.elementor-element-83a5654 img');
    this.assertSection("A Great way to Monetize your Inventory", '.elementor-element-34603dc');
    this.handleVideoPopup('.elementor-element-0af373c img', '.sgpb-popup-close-button-1');
    this.assertSection("Real Conversions for Publishers");
    this.assertSection("Utilize our cutting-edge, adaptable tech stack", '.elementor-element-7b5bfab');
    cy.get('.elementor-element-3c2f63f .elementor-button').click({ force: true });
    cy.go("back");
    this.assertSection("Our Trusted Partners", '.elementor-element-a38961e');
    this.handleCarouselArrows('.e-eicon-chevron-left', '.e-eicon-chevron-right');
    cy.scrollTo("bottom");
  }

  // ==========================
  // 🔹 Wrapper Methods
  // ==========================
  runOmnichannelFlow() { this.validateOmnichannelSections(); }
  runIdentityGraphFlow() { this.validateIdentityGraphSections(); }
  runAICohortFlow() { this.validateAICohortSections(); }
  runAdServiceFlow() { this.validateAdServiceSections(); }
  runForPublishersFlow() { this.validateForPublishersSections(); }
}

export default OurSolutionsPage;
