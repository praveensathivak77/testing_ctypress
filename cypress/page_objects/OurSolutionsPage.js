class OurPlatformsPage {
  // ==========================
  // 🔹 Shared Utilities
  // ==========================

  hoverOnOurPlatformsMenu() {
    cy.viewport(1366, 768);
    cy.contains("Our Platforms", { timeout: 10000 })
      .should("exist")
      .realHover("mouse");
    cy.wait(1200);
  }

  clickMenuItem(name) {
    cy.log(`🖱️ Clicking ${name} submenu...`);
    cy.contains("a", name, { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  clickButton(selector) {
    cy.get(selector, { timeout: 10000 })
      .filter(":visible")
      .first()
      .scrollIntoView()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.wait(1500);
    cy.go("back");
  }

  assertSection(text, selector = null) {
    if (selector)
      cy.get(selector).scrollIntoView({ duration: 1500 }).should("be.visible");
    cy.contains(text, { timeout: 10000 }).should("be.visible");
  }

  handleCarouselArrows(leftSelector, rightSelector, count = 6) {
    for (let i = 0; i < count; i++) {
      cy.get(leftSelector).first().click({ force: true });
      cy.wait(250);
    }
    for (let i = 0; i < count; i++) {
      cy.get(rightSelector).first().click({ force: true });
      cy.wait(250);
    }
  }

  clickAccordion(minusSelector, plusSelector) {
    cy.get(minusSelector).first().scrollIntoView().click({ force: true });
    cy.wait(300);
    cy.get(plusSelector).first().scrollIntoView().click({ force: true });
    cy.wait(300);
    cy.get(plusSelector).eq(1).scrollIntoView().click({ force: true });
    cy.wait(300);
  }

  scrollBottom() {
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(1000);
  }

  // ==========================
  // 🔹 Menu Clicks
  // ==========================

  clickCubeMenu() { this.clickMenuItem("Cube"); }
  clickIdentityGraphMenu() { this.clickMenuItem("Cubera Identity Graph"); }
  clickEdgeMenu() { this.clickMenuItem("Edge"); }
  clickVertexMenu() { this.clickMenuItem("Vertex"); }

  // ==========================
  // 🔹 Cube Flow
  // ==========================
  validateCubeSections() {
    cy.log("🚀 Validating Cube platform...");
    this.assertSection("CUBE is an AI-driven Audience Discovery");
    this.clickButton(".elementor-element-1b21d01 .elementor-button");
    this.assertSection("From Data to Actionable Signals");
    this.clickButton(".elementor-element-1679ab3 .elementor-button");
    this.assertSection("Our Trusted Partners", ".elementor-element-a38961e");
    this.handleCarouselArrows(".e-eicon-chevron-left", ".e-eicon-chevron-right");
    this.scrollBottom();
    cy.log("🎯 Cube validation complete!");
  }

  // ==========================
  // 🔹 Cubera Identity Graph Flow
  // ==========================
  validateIdentityGraphSections() {
    cy.log("🧭 Validating Cubera Identity Graph...");
    this.assertSection("Cubera Identity Graph");
    this.clickButton(".elementor-element-1b21d01 .elementor-button");
    this.assertSection("Unified Insights, Personalized Marketing", ".elementor-element-3ce8ef5");
    this.clickButton(".elementor-element-1679ab3 .elementor-button");
    this.assertSection("360-Degree Customer View", ".elementor-element-1d8102a");
    this.assertSection("Our Trusted Partners", ".elementor-element-a38961e");
    this.handleCarouselArrows(".e-eicon-chevron-left", ".e-eicon-chevron-right");
    this.scrollBottom();
    cy.log("🎯 Identity Graph validation complete!");
  }

  // ==========================
  // 🔹 Edge Flow
  // ==========================
  validateEdgeSections() {
    cy.log("⚡ Validating Edge platform...");
    this.assertSection("Edge");
    this.clickButton(".elementor-element-1b21d01 .elementor-button-text");
    this.assertSection("Driving High Impact Campaigns", ".elementor-element-3ce8ef5");
    this.clickButton(".elementor-element-1679ab3 .elementor-button");
    this.assertSection("AI optimized ad performance", ".elementor-element-a27fb90");
    this.assertSection("Our Trusted Partners", ".elementor-element-a38961e");
    this.handleCarouselArrows(".e-eicon-chevron-left", ".e-eicon-chevron-right");
    this.assertSection("Designed to transform advertising", ".elementor-element-c06ca8a");
    cy.get(".e-fas-minus, .e-fas-plus").each(($icon) => {
      cy.wrap($icon).scrollIntoView().click({ force: true });
      cy.wait(400);
    });
    this.clickButton(".elementor-element-8b463c6 .elementor-button-text");
    this.scrollBottom();
    cy.log("🎯 Edge validation complete!");
  }

  // ==========================
  // 🔹 Vertex Flow
  // ==========================
  validateVertexSections() {
    cy.log("💠 Validating Vertex platform...");
    cy.url().should("include", "/vertex");
    this.assertSection("Vertex");

    this.clickButton(".elementor-element-1b21d01 .elementor-button");
    this.assertSection("Unique Signals, Flawless Precision", ".elementor-element-3ce8ef5");
    this.clickButton(".elementor-element-1679ab3 .elementor-button");
    this.assertSection("Every Impression is Maximized", ".elementor-element-608fc4d");
    this.assertSection("Our Trusted Partners", ".elementor-element-a38961e");
    this.handleCarouselArrows(".e-eicon-chevron-left", ".e-eicon-chevron-right");
    this.assertSection("High Volumes, Minimal Latency", ".elementor-element-4f7b2cd");
    this.clickAccordion(".e-fas-minus", ".e-fas-plus");
    this.clickButton(".elementor-element-591e26a .elementor-button");
    this.scrollBottom();
    cy.log("🎯 Vertex validation complete!");
  }

  // ==========================
  // 🔹 Wrapper Methods
  // ==========================
  runCubeFlow() { this.validateCubeSections(); }
  runIdentityGraphFlow() { this.validateIdentityGraphSections(); }
  runEdgeFlow() { this.validateEdgeSections(); }
  runVertexFlow() { this.validateVertexSections(); }
}

export default OurPlatformsPage;
