class OurSolutionsPage {
  // ===================================================
  // 🔹 Shared Methods
  // ===================================================

  visitHomepage() {
    cy.viewport(1366, 768);
    cy.visit("https://cubera.co/");
    cy.wait(2000);
  }

  hoverOnOurSolutionsMenu() {
    cy.viewport(1366, 768);
    cy.get("header", { timeout: 20000 }).should("be.visible");
    cy.contains("a", "Our Solutions", { timeout: 20000 })
      .should("exist")
      .filter(":visible")
      .scrollIntoView({ duration: 1000 })
      .should("be.visible")
      .realHover({ position: "center" });
    cy.wait(1500);
  }

  clickMenuItem(name) {
    cy.log(`🖱️ Clicking menu item: ${name}`);

    const menuMap = {
      "Omnichannel Targeting": ".menu-item-1552 > a",
      "Identity Graph": ".menu-item-1553 > a",
      "AI Cohort Generation": ".menu-item-1554 > a",
      "Ad Service": ".menu-item-1555 > a",
      "For Publishers": ".menu-item-1556 > a",
    };

    const selector = menuMap[name];

    this.hoverOnOurSolutionsMenu();

    cy.get(selector, { timeout: 15000 })
      .should("exist")
      .filter(":visible")
      .first()
      .scrollIntoView({ duration: 800 })
      .should("be.visible")
      .click({ force: true });

    cy.wait(2500);
  }

  clickReachoutButton() {
    cy.log("Clicking Reachout button...");
    cy.get(
      ".elementor-element-1b21d01 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button",
      { timeout: 15000 }
    )
      .filter(":visible")
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  // ===================================================
  // 🔹 Video popup (YouTube-safe version)
  // ===================================================

  clickVideoAndPlay() {
    cy.log("🎬 Opening video popup...");
    cy.get("a > .attachment-large", { timeout: 15000 })
      .filter(":visible")
      .first()
      .should("be.visible")
      .click({ force: true });

    cy.wait(5000); // give popup time to render

    // ✅ safely wait for video iframe to load and confirm visibility
    cy.get("iframe", { timeout: 15000 })
      .should("exist")
      .and("be.visible");

    cy.log("▶️ Video popup opened and visible.");

    // Wait for 10s to simulate playback
    cy.wait(10000);

    cy.log("✅ Video validated successfully — skipping restricted YouTube buttons.");
  }

  carouselScrolls() {
    for (let i = 0; i < 11; i++) {
      cy.get(".e-font-icon-svg.e-eicon-chevron-left")
        .filter(":visible")
        .click({ force: true });
      cy.wait(250);
    }
    for (let i = 0; i < 11; i++) {
      cy.get(".e-font-icon-svg.e-eicon-chevron-right")
        .filter(":visible")
        .click({ force: true });
      cy.wait(250);
    }
  }

  navigateBack() {
    cy.go("back");
    cy.wait(3000);
  }

  // ===================================================
  // 🔹 Omnichannel Targeting Page Validation
  // ===================================================

  validateOmnichannelContent() {
    cy.contains("Omnichannel Targeting", { timeout: 15000 }).should("be.visible");

    this.clickReachoutButton();
    this.navigateBack();

    cy.get(".elementor-element-3ce8ef5").scrollIntoView({ duration: 1500 });
    cy.contains("Connecting when they love to").should("be.visible");

    cy.get(".elementor-element-20744f9").scrollIntoView({ duration: 1500 });
    cy.contains("Omnichannel Targeting is playing a pivotal role via").should(
      "be.visible"
    );

    cy.get(".elementor-element-34603dc").scrollIntoView({ duration: 1500 });
    cy.contains("Seamless Customer Experience").should("be.visible");

    cy.get(".elementor-element-7da0e8b").scrollIntoView({ duration: 1500 });
    cy.contains("Activate campaigns across platforms").should("be.visible");

    this.clickVideoAndPlay();

    cy.get(".elementor-element-7b5bfab").scrollIntoView({ duration: 1500 });
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get(
      ".elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    )
      .should("be.visible")
      .click({ force: true });
    cy.contains("Get in touch with us").should("be.visible");
    this.navigateBack();

    cy.get(".elementor-element-a38961e").scrollIntoView({ duration: 1500 });
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScrolls();
    cy.get(".elementor-element-0dc3f6b").scrollIntoView({ duration: 1500 });
  }

  // ===================================================
  // 🔹 Identity Graph Page Validation
  // ===================================================

  validateIdentityGraphContent() {
    this.clickReachoutButton();
    this.navigateBack();

    cy.get(".elementor-element-3ce8ef5").scrollIntoView({ duration: 1500 });
    cy.contains("Unlocking the Full Picture of Your Audience").should("be.visible");

    cy.get(".elementor-element-34603dc").scrollIntoView({ duration: 1500 });
    cy.contains("Fun Way to Discover Audience").should("be.visible");

    cy.get(".elementor-element-a35e998").scrollIntoView({ duration: 1500 });
    cy.contains("Unleash the Power of Unified Customer Data").should("be.visible");

    this.clickVideoAndPlay();

    cy.get(".elementor-element-7b5bfab").scrollIntoView({ duration: 1500 });
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get(
      ".elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    )
      .should("be.visible")
      .click({ force: true });
    this.navigateBack();

    cy.get(".elementor-element-a38961e").scrollIntoView({ duration: 1500 });
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScrolls();
    cy.get(".elementor-element-0dc3f6b").scrollIntoView({ duration: 1500 });
  }

  // ===================================================
  // 🔹 AI Cohort Generation Page Validation
  // ===================================================

  validateAICohortContent() {
    cy.contains("AI Cohort Generation", { timeout: 10000 }).should("be.visible");

    this.clickReachoutButton();
    this.navigateBack();

    cy.get(".elementor-element-3ce8ef5").scrollIntoView({ duration: 1500 });
    cy.contains("Precision Targeting at Scale").should("be.visible");

    cy.get(".elementor-element-34603dc").scrollIntoView({ duration: 1500 });
    cy.contains("Fun Way to Discover Audience").should("be.visible");

    cy.get(".elementor-element-6f93842").scrollIntoView({ duration: 1500 });
    cy.contains("Dynamic Data-Driven Cohorts in Real Time").should("be.visible");

    this.clickVideoAndPlay();

    cy.get(".elementor-element-7b5bfab").scrollIntoView({ duration: 1500 });
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get(
      ".elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    )
      .should("be.visible")
      .click({ force: true });
    this.navigateBack();

    cy.get(".elementor-element-a38961e").scrollIntoView({ duration: 1500 });
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScrolls();
    cy.get(".elementor-element-0dc3f6b").scrollIntoView({ duration: 1500 });
  }

  // ===================================================
  // 🔹 Ad Services Page Validation
  // ===================================================

  validateAdServiceContent() {
    cy.contains("Ad Service", { timeout: 10000 }).should("be.visible");

    this.clickReachoutButton();
    this.navigateBack();

    cy.get(".elementor-element-3ce8ef5").scrollIntoView({ duration: 1500 });
    cy.contains("Ad Services to Suit Your Way").should("be.visible");

    cy.get(".elementor-element-34603dc").scrollIntoView({ duration: 1500 });
    cy.contains("End-to-End Support").should("be.visible");

    cy.get(".elementor-element-af305cb").scrollIntoView({ duration: 1500 });
    cy.contains("Skyrocket your ROAS with us").should("be.visible");

    this.clickVideoAndPlay();

    cy.get(".elementor-element-7b5bfab").scrollIntoView({ duration: 1500 });
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get(
      ".elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    )
      .should("be.visible")
      .click({ force: true });

      
    this.navigateBack();

    cy.get(".elementor-element-a38961e").scrollIntoView({ duration: 1500 });
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScrolls();
    cy.get(".elementor-element-0dc3f6b").scrollIntoView({ duration: 1500 });
  }

  // ===================================================
  // 🔹 For Publishers Page Validation
  // ===================================================

  validateForPublishersContent() {
    cy.contains("For Publishers", { timeout: 10000 }).should("be.visible");

    this.clickReachoutButton();
    this.navigateBack();

    cy.get(".elementor-element-3ce8ef5").scrollIntoView({ duration: 1500 });
    cy.contains("Maximize Revenue from Inventory").should("be.visible");

    cy.get(".elementor-element-34603dc").scrollIntoView({ duration: 1500 });
    cy.contains("Strategic Growth").should("be.visible");

    cy.get(".elementor-element-6621a0f").scrollIntoView({ duration: 1500 });
    cy.contains("Real Conversions for Publishers").should("be.visible");

    this.clickVideoAndPlay();

    cy.get(".elementor-element-7b5bfab").scrollIntoView({ duration: 1500 });
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get(
      ".elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    )
      .should("be.visible")
      .click({ force: true });
    this.navigateBack();

    cy.get(".elementor-element-a38961e").scrollIntoView({ duration: 1500 });
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScrolls();
    cy.get(".elementor-element-0dc3f6b").scrollIntoView({ duration: 1500 });
  }
}

export default OurSolutionsPage;
