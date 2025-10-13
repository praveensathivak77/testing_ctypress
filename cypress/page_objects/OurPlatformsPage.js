class OurPlatformsPage {
  // 🔹 Hover over "Our Platforms" menu
  hoverOnOurPlatformsMenu() {
    cy.contains("Our Platforms", { timeout: 10000 })
      .should("exist")
      .realHover("mouse");
    cy.wait(1200);
  }

  // 🔹 Verify submenu items are visible under "Our Platforms"
  verifySubmenuItems() {
    const expectedSubmenus = ["Cube", "Cubera Identity Graph", "Edge", "Vertex"];
    expectedSubmenus.forEach((name) => {
      cy.contains("a", name, { timeout: 5000 })
        .should("be.visible")
        .and("have.attr", "href");
    });
  }

  // 🔹 Click the Cube submenu
  clickCube() {
    cy.log("🖱️ Clicking Cube submenu...");
    cy.contains("a", "Cube", { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  // 🔹 Click the Cubera Identity Graph submenu
  clickIdentityGraph() {
    cy.log("🖱️ Clicking Cubera Identity Graph submenu...");
    cy.contains("a", "Cubera Identity Graph", { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  // ✅ FIX ADDED HERE → Click the Edge submenu
  clickEdge() {
    cy.log("🖱️ Clicking Edge submenu...");
    cy.contains("a", "Edge", { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  clickVertex() {
  cy.log("🖱️ Clicking Vertex submenu...");
  cy.contains("a", "Vertex", { timeout: 10000 })
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
}


  // 🔹 Validate Cube page content & interactions
  validateCubeSections() {
    cy.log("🚀 Starting Cube page validation flow...");

    cy.contains("CUBE is an AI-driven Audience Discovery", { timeout: 15000 })
      .should("be.visible");

    cy.get(".elementor-element-1b21d01 .elementor-button", { timeout: 10000 })
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1500);
    cy.go("back");
    cy.wait(1500);

    cy.get(".elementor-element-187eb51", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");
    cy.contains("From Data to Actionable Signals").should("be.visible");

    cy.get(".elementor-element-1679ab3 .elementor-button", { timeout: 10000 })
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1500);
    cy.go("back");
    cy.wait(1500);

    cy.get(".elementor-element-a38961e", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Our Trusted Partners").should("be.visible");

    for (let i = 0; i < 6; i++) {
      cy.get(".e-font-icon-svg.e-eicon-chevron-left", { timeout: 5000 })
        .first()
        .click({ force: true });
      cy.wait(400);
    }
    for (let i = 0; i < 6; i++) {
      cy.get(".e-font-icon-svg.e-eicon-chevron-right", { timeout: 5000 })
        .first()
        .click({ force: true });
      cy.wait(400);
    }

    cy.get(".elementor-element-da8768d", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");
    cy.contains("A Platform Built to Adapt").should("be.visible");

    cy.get(".elementor-element-5ff1d1d .elementor-button", { timeout: 10000 })
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    cy.go("back");
    cy.wait(1500);

    cy.get(".e-font-icon-svg.e-fas-minus, .e-font-icon-svg.e-fas-plus", {
      timeout: 10000,
    }).each(($icon) => {
      cy.wrap($icon)
        .scrollIntoView()
        .click({ force: true });
      cy.wait(500);
    });

    cy.scrollTo("bottom", { duration: 2500 });
    cy.wait(1000);

    cy.log("🎯 Cube page validation complete!");
  }

  // 🔹 Cubera Identity Graph Page Validation
  validateIdentityGraphSections() {
    cy.log("🧭 Starting Cubera Identity Graph page validation...");

    cy.contains("Cubera Identity Graph", { timeout: 15000 }).should("be.visible");

    cy.get('.elementor-element-1b21d01 .elementor-button', { timeout: 10000 })
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1500);
    cy.go("back");
    cy.wait(1500);

    cy.get('.elementor-element-3ce8ef5', { timeout: 10000 })
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Unified Insights, Personalized Marketing").should("be.visible");

    cy.get('.elementor-element-1679ab3 .elementor-button', { timeout: 10000 })
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1500);
    cy.go("back");
    cy.wait(1500);

    cy.get('.elementor-element-1d8102a', { timeout: 10000 })
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("360-Degree Customer View").should("be.visible");

    cy.get('.elementor-element-a38961e', { timeout: 10000 })
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("Our Trusted Partners").should("be.visible");

    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-left', { timeout: 5000 })
        .first()
        .click({ force: true });
      cy.wait(400);
    }
    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-right', { timeout: 5000 })
        .first()
        .click({ force: true });
      cy.wait(400);
    }

    cy.get('.elementor-element-a9a19ee', { timeout: 10000 })
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
    cy.contains("A Single, Cohesive Identity").should("be.visible");

    cy.get('.e-font-icon-svg.e-fas-minus', { timeout: 10000 })
      .first()
      .click({ force: true });
    cy.wait(500);
    cy.get('.e-font-icon-svg.e-fas-plus', { timeout: 10000 })
      .first()
      .click({ force: true });
    cy.wait(500);
    cy.get('.e-font-icon-svg.e-fas-plus', { timeout: 10000 })
      .eq(1)
      .click({ force: true });
    cy.wait(500);

    cy.get('.elementor-element-09e7102 .elementor-button', { timeout: 10000 })
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    cy.go("back");
    cy.wait(1500);

    cy.scrollTo("bottom", { duration: 2500 });
    cy.wait(1000);

    cy.log("🎯 Cubera Identity Graph validation complete!");
  }

  // 🔹 Validate Edge platform sections and interactions
  validateEdgeSections() {
    cy.log("🚀 Starting Edge platform validation...");

    cy.contains("Edge", { timeout: 15000 }).should("be.visible");

    cy.get('.elementor-element-1b21d01 .elementor-button-text', { timeout: 10000 })
      .first()
      .scrollIntoView()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.wait(1000);
    cy.go("back");

    cy.get('.elementor-element-3ce8ef5')
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Driving High Impact Campaigns").should("be.visible");

    cy.get('.elementor-element-1679ab3 .elementor-button')
      .first()
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.wait(1000);
    cy.go("back");

    cy.get('.elementor-element-a27fb90')
      .scrollIntoView()
      .should("be.visible");
    cy.contains("AI optimized ad performance").should("be.visible");

    cy.get('.elementor-element-a38961e')
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Our Trusted Partners").should("be.visible");

    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-left')
        .first()
        .click({ force: true });
      cy.wait(400);
    }
    for (let i = 0; i < 6; i++) {
      cy.get('.e-font-icon-svg.e-eicon-chevron-right')
        .first()
        .click({ force: true });
      cy.wait(400);
    }

   cy.get('.elementor-element-c06ca8a')
  .scrollIntoView()
  .should("be.visible");

cy.contains("Designed to transform advertising").should("be.visible");

// 🔹 Click all +/- icons
cy.get(".e-font-icon-svg.e-fas-minus, .e-font-icon-svg.e-fas-plus", { timeout: 10000 })
  .each(($icon) => {
    cy.wrap($icon)
      .scrollIntoView()
      .click({ force: true });
    cy.wait(500);
  });

cy.get('.elementor-element-8b463c6 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text', { timeout: 10000 })
  .scrollIntoView()
  .click({ force: true });
cy.wait(2000);
cy.go('back');
cy.wait(2000);

cy.get('.elementor-element-c06ca8a')
  .scrollIntoView()
  .should("be.visible");


    cy.scrollTo("bottom", { duration: 2500 });
    cy.wait(1000);

    cy.log("🎯 Edge platform validation complete!");
  }
  // 🔹 Validate Vertex platform sections and interactions
validateVertexSections() {
  cy.log("🚀 Starting Vertex platform validation...");

  // Ensure we're actually on the Vertex page
  cy.url().should("include", "/vertex");
  cy.contains("Vertex", { timeout: 15000 }).should("be.visible");

  // 1) Vertex section CTA -> visit & back
  cy.get(".elementor-element-1b21d01 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button", { timeout: 10000 })
    .first()
    .scrollIntoView()
    .should("be.visible")
    .invoke("removeAttr", "target")
    .click({ force: true });
  cy.location("pathname", { timeout: 10000 }).should("not.include", "/vertex"); // navigated away
  cy.go("back");
  cy.url().should("include", "/vertex");

  // 2) Unique Signals section -> assert + CTA -> back
  cy.get(".elementor-element-3ce8ef5", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible");
  cy.contains("Unique Signals, Flawless Precision", { timeout: 10000 }).should("be.visible");
  cy.get(".elementor-element-1679ab3 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button", { timeout: 10000 })
    .first()
    .scrollIntoView()
    .should("be.visible")
    .invoke("removeAttr", "target")
    .click({ force: true });
  cy.location("pathname", { timeout: 10000 }).should("not.include", "/vertex");
  cy.go("back");
  cy.url().should("include", "/vertex");

  // 3) Every Impression section
  cy.get(".elementor-element-608fc4d", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible");
  cy.contains("Every Impression is Maximized", { timeout: 10000 }).should("be.visible");

  // 4) Our Trusted Partners + carousel left/right 6x each (guard existence)
  cy.get(".elementor-element-a38961e", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible");
  cy.contains("Our Trusted Partners", { timeout: 10000 }).should("be.visible");

  cy.get(".e-font-icon-svg.e-eicon-chevron-left", { timeout: 10000 })
    .first()
    .should("be.visible");
  for (let i = 0; i < 6; i++) {
    cy.get(".e-font-icon-svg.e-eicon-chevron-left").first().click({ force: true });
    cy.wait(250);
  }
  cy.get(".e-font-icon-svg.e-eicon-chevron-right", { timeout: 10000 })
    .first()
    .should("be.visible");
  for (let i = 0; i < 6; i++) {
    cy.get(".e-font-icon-svg.e-eicon-chevron-right").first().click({ force: true });
    cy.wait(250);
  }

  // 5) High Volumes section + text
  cy.get(".elementor-element-4f7b2cd", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible");
  cy.contains("High Volumes, Minimal Latency", { timeout: 10000 }).should("be.visible");

  // 6) +/- accordions: click specific, avoid multi-match errors
  cy.get(".e-font-icon-svg.e-fas-minus", { timeout: 10000 }).first().scrollIntoView().click({ force: true });
  cy.wait(300);
  cy.get(".e-font-icon-svg.e-fas-plus", { timeout: 10000 }).first().scrollIntoView().click({ force: true });
  cy.wait(300);
  cy.get(".e-font-icon-svg.e-fas-plus", { timeout: 10000 }).eq(1).scrollIntoView().click({ force: true });
  cy.wait(300);

  // 7) Final CTA -> back
  cy.get(".elementor-element-591e26a > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button", { timeout: 10000 })
    .first()
    .scrollIntoView()
    .should("be.visible")
    .invoke("removeAttr", "target")
    .click({ force: true });
  cy.location("pathname", { timeout: 10000 }).should("not.include", "/vertex");
  cy.go("back");
  cy.url().should("include", "/vertex");

  // Finish
  cy.scrollTo("bottom", { duration: 2000 });
  cy.log("🎯 Vertex platform validation complete!");
  }
}

export default OurPlatformsPage;
