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

  clickAdServiceMenuItem() {
    cy.log("Clicking Ad Service...");
    cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1555 > a', { timeout: 10000 })
      .filter(":visible")
    .click({ force: true });
    cy.wait(2000);
  }

  clickForPublishersMenuItem() {
    cy.log("Clicking For Publishers...");
    cy.get('.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-1556 > a', { timeout: 10000 })
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

     handleVideoPopup() {
    cy.log("🎬 Handling video popup safely (no YouTube controls)...");

    // ✅ Ensure thumbnail exists
    cy.get('a > .attachment-large', { timeout: 10000 })
      .first()
      .should("exist")
      .and("be.visible");

    // ✅ Click thumbnail to open popup
    cy.get('a > .attachment-large').first().click({ force: true });
    cy.wait(1000); // wait for popup to open

    // ✅ Close popup safely
    cy.get('.sgpb-popup-close-button-1', { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });

    // ✅ Optional small wait after closing
    cy.wait(1500);

    cy.log("✅ Video thumbnail clicked and popup closed successfully.");
  }


  carouselScroll() {
    cy.log("Scrolling carousel left and right 11 times...");
    for (let i = 0; i < 11; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-left').click({ force: true });
      cy.wait(200);
    }
    for (let i = 0; i < 11; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-right').click({ force: true });
      cy.wait(200);
    }
  
  }

  // ==========================
  // 🔹 Omnichannel Flow
  // ==========================
  validateOmnichannelSections() {
    cy.contains("Omnichannel Targeting").should("be.visible");
    this.clickReachoutButton();
    cy.go("back");

    cy.get('.elementor-element-3ce8ef5').scrollIntoView({ duration: 1500 });
    cy.contains("Connecting when they love to").should("be.visible");

    cy.get('.elementor-element-20744f9').scrollIntoView({ duration: 1500 });
    cy.contains("Omnichannel Targeting is playing a pivotal role via").should("be.visible");

    cy.get('.elementor-element-34603dc').scrollIntoView({ duration: 1500 });
    cy.contains("Seamless Customer Experience").should("be.visible");

    cy.get('.elementor-element-7da0e8b').scrollIntoView({ duration: 1500 });
    cy.contains("Activate campaigns across platforms").should("be.visible");

    this.handleVideoPopup();

    cy.get('.elementor-element-7b5bfab').scrollIntoView({ duration: 1500 });
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .click({ force: true });
    cy.contains("Get in touch with us").should("be.visible");
    cy.go("back");

    cy.get('.elementor-element-a38961e').scrollIntoView({ duration: 1500 });
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScroll();
    cy.get('.elementor-element-0dc3f6b').scrollIntoView({ duration: 1500 });
  }

  // ==========================
  // 🔹 Identity Graph Flow
  // ==========================
  validateIdentityGraphSections() {
    cy.contains("Identity Graph").should("be.visible");
    this.clickReachoutButton();
    cy.go("back");

    cy.get('.elementor-element-3ce8ef5').scrollIntoView();
    cy.contains("Unlocking the Full Picture of Your Audience").should("be.visible");

    cy.get('.elementor-element-34603dc').scrollIntoView();
    cy.contains("Fun Way to Discover Audience").should("be.visible");

    cy.get('.elementor-element-a35e998').scrollIntoView();
    cy.contains("Unleash the Power of Unified Customer Data").should("be.visible");

    this.handleVideoPopup();

    cy.get('.elementor-element-7b5bfab').scrollIntoView();
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .click({ force: true });
    cy.go("back");

    cy.get('.elementor-element-a38961e').scrollIntoView();
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScroll();
    cy.get('.elementor-element-0dc3f6b').scrollIntoView();
  }

  // ==========================
  // 🔹 AI Cohort Flow
  // ==========================
  validateAICohortSections() {
    cy.contains("AI Cohort Generation").should("be.visible");
    this.clickReachoutButton();
    cy.go("back");

    cy.get('.elementor-element-3ce8ef5').scrollIntoView();
    cy.contains("Precision Targeting at Scale").should("be.visible");

    cy.get('.elementor-element-34603dc').scrollIntoView();
    cy.contains("Fun Way to Discover Audience").should("be.visible");

    cy.get('.elementor-element-6f93842').scrollIntoView();
    cy.contains("Dynamic Data-Driven Cohorts in Real Time").should("be.visible");

    this.handleVideoPopup();

    cy.get('.elementor-element-7b5bfab').scrollIntoView();
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .click({ force: true });
    cy.go("back");

    cy.get('.elementor-element-a38961e').scrollIntoView();
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScroll();
    cy.get('.elementor-element-0dc3f6b').scrollIntoView();
  }

  // ==========================
  // 🔹 Ad Service Flow
  // ==========================
  validateAdServiceSections() {
    cy.contains("Ad Service").should("be.visible");
    this.clickReachoutButton();
    cy.go("back");

    cy.get('.elementor-element-3ce8ef5').scrollIntoView();
    cy.contains("Ad Services to Suit Your Way").should("be.visible");

    cy.get('.elementor-element-34603dc').scrollIntoView();
    cy.contains("End-to-End Support").should("be.visible");

    cy.get('.elementor-element-af305cb').scrollIntoView();
    cy.contains("Skyrocket your ROAS with us").should("be.visible");

    this.handleVideoPopup();

    cy.get('.elementor-element-7b5bfab').scrollIntoView();
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .click({ force: true });
    cy.go("back");

    cy.get('.elementor-element-a38961e').scrollIntoView();
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScroll();
    cy.get('.elementor-element-0dc3f6b').scrollIntoView();
  }

  // ==========================
  // 🔹 For Publishers Flow
  // ==========================
  validateForPublishersSections() {
    cy.contains("For Publishers").should("be.visible");
    this.clickReachoutButton();
    cy.go("back");

    cy.get('.elementor-element-3ce8ef5').scrollIntoView();
    cy.contains("Maximize Revenue from Inventory").should("be.visible");

    cy.get('.elementor-element-34603dc').scrollIntoView();
    cy.contains("Strategic Growth").should("be.visible");

    cy.get('.elementor-element-6621a0f').scrollIntoView();
    cy.contains("Real Conversions for Publishers").should("be.visible");

    this.handleVideoPopup();

    cy.get('.elementor-element-7b5bfab').scrollIntoView();
    cy.contains("Utilize our cutting-edge, adaptable tech stack").should("be.visible");

    cy.get('.elementor-element-3c2f63f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .click({ force: true });
    cy.go("back");

    cy.get('.elementor-element-a38961e').scrollIntoView();
    cy.contains("Our Trusted Partners").should("be.visible");

    this.carouselScroll();
    cy.get('.elementor-element-0dc3f6b').scrollIntoView();
  }
}

export default OurSolutionsPage;
