class AboutPage {
  // ==========================
  // 🔹 Visit About Page
  // ==========================
  visit() {
    cy.viewport(1366, 768);
    cy.visit("https://cubera.co/about-us/");
  }


  // ==========================
  // 🔹 Text Verifications
  // ==========================
  verifyTrustedPartnerText() {
    cy.contains("We are a trusted partner in our clients' AI journey", { timeout: 15000 })
      .scrollIntoView({ offset: { top: -200 } })
      .should("be.visible");
  }

  verifyMaximizingImpactText() {
    cy.contains("Maximizing your impact through", { timeout: 15000 })
      .scrollIntoView({ offset: { top: -200 } })
      .should("be.visible");
  }

  verifyInnovativeMindsText() {
    cy.contains("Innovative minds shaping tomorrow's AdTech landscape.", { timeout: 15000 })
      .scrollIntoView({ offset: { top: -200 } })
      .should("be.visible");
  }

  // ==========================
  // 🔹 Click LinkedIn Icons (Safe)
  // ==========================
  clickLinkedInSafely(selector) {
    cy.get(selector, { timeout: 15000 })
      .scrollIntoView({ offset: { top: -200 } })
      .should("exist")
      .should("be.visible")
      .then(($el) => {
        const tag = $el.prop("tagName").toLowerCase();
        if (tag === "a") {
          cy.wrap($el)
            .invoke("removeAttr", "target")
            .then(($link) => {
              cy.log(`🌐 Clicking LinkedIn: ${$link.attr("href")}`);
              $link[0].click();
            });
          cy.url({ timeout: 20000 }).should("include", "linkedin.com");
          cy.go("back");
          cy.url({ timeout: 10000 }).should("include", "/about-us");
        } else {
          cy.log("⚠️ Element is not an <a> link, skipping.");
        }
      });
  }

  clickLinkedInIcon() {
    const topLinkedIn =
      ".elementor-element-55bab90 > .elementor-widget-container > .elementor-social-icons-wrapper > .elementor-grid-item > .elementor-icon";
    const bottomLinkedIn =
      ".elementor-element-6915771 > .elementor-widget-container > .elementor-social-icons-wrapper > .elementor-grid-item > .elementor-icon";

    cy.log("🔹 Clicking top LinkedIn icon...");
    this.clickLinkedInSafely(topLinkedIn);

    cy.log("🔹 Clicking bottom LinkedIn icon...");
    this.clickLinkedInSafely(bottomLinkedIn);
  }

  // ==========================
  // 🔹 Partners Section
  // ==========================
  verifyPartnersSection() {
    cy.log("🔹 Verifying 'Our Trusted Partners' section...");
    cy.get(".elementor-element-a38961e", { timeout: 15000 })
      .scrollIntoView({ offset: { top: -200 } })
      .should("be.visible")
      .contains("Our Trusted Partners");

    cy.log("🔹 Clicking left carousel 6 times...");
    for (let i = 0; i < 6; i++) {
      cy.get(".e-font-icon-svg.e-eicon-chevron-left").click({ force: true });
      cy.wait(300);
    }

    cy.log("🔹 Clicking right carousel 6 times...");
    for (let i = 0; i < 6; i++) {
      cy.get(".e-font-icon-svg.e-eicon-chevron-right").click({ force: true });
      cy.wait(300);
    }
  }

  // ==========================
  // 🔹 Ecosystem Section
  // ==========================
  verifyEcosystemSection() {
    cy.log("🔹 Verifying 'Why We Built the Cubera Ecosystem'...");
    cy.get(".elementor-element-f75e19d", { timeout: 15000 })
      .scrollIntoView({ offset: { top: -200 } })
      .should("be.visible")
      .contains("Why We Built the Cubera Ecosystem");

    cy.wait(500);

    cy.log("🔹 Expanding accordion items...");
    cy.get(
      "#e-n-accordion-item-1370 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-opened > .e-font-icon-svg"
    ).click({ force: true });

    cy.get(
      "#e-n-accordion-item-1371 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-closed > .e-font-icon-svg > path"
    ).click({ force: true });

    cy.get(
      "#e-n-accordion-item-1372 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-closed > .e-font-icon-svg > path"
    ).click({ force: true });
  }

 // ==========================
// 🔹 Contact Section
// ==========================
verifyGetInTouchSection() {
  cy.log("🔹 Clicking the 'Reach Out' button...");

  // Scroll to the button
  cy.get(".elementor-button-wrapper", { timeout: 15000 })
    .scrollIntoView({ offset: { top: -200 } })
    .should("be.visible");

  // Click the button (actual clickable element)
  cy.get(".elementor-button", { timeout: 15000 })
    .should("be.visible")
    .and("contain.text", "Reach Out") // confirm correct button before click
    .invoke("removeAttr", "target") // open in same tab if external
    .click({ force: true });

  cy.log("🔹 Button clicked, verifying new section/page...");

  // ✅ Wait and verify 'Get in touch with us' appears after navigation
  cy.contains("Get in touch with us", { timeout: 15000 })
    .scrollIntoView()
    .should("be.visible");

  cy.log("✅ 'Get in touch with us' text is visible after clicking Reach Out");

  // Go back to About page
  cy.go("back");
  cy.url({ timeout: 10000 }).should("include", "/about-us");

  cy.log("🔙 Returned to About Us page successfully");
}


  // ==========================
  // 🔹 Last Section
  // ==========================
 visitFinalSection() {
  cy.log("🔹 Visiting last section (.elementor-element-0dc3f6b)...");

  // Scroll to the final section and verify it's visible
  cy.get(".elementor-element-0dc3f6b", { timeout: 15000 })
    .scrollIntoView({ offset: { top: -200 } })
    .should("be.visible");

  cy.wait(1000); // small pause to stabilize viewport

  // 🔹 Scroll back up smoothly to top of page
  cy.log("🔹 Scrolling back to top...");
  cy.window().then((win) => {
    win.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Verify we’re near the top again (scrollY close to 0)
  cy.window().its("scrollY").should("be.lt", 50);

  cy.log("✅ Successfully verified final section and scrolled to top");
}
// Hover on "About" dropdown
  hoverOnAboutMenu() {
    cy.contains("About", { timeout: 10000 }).should("exist").realHover();
    cy.wait(1000);
  }

  clickManagementSubmenu() {
    cy.contains("Management", { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });

    cy.location("pathname", { timeout: 10000 }).should("include", "/management");
    cy.wait(1500);
  }

  // ✅ Verify all team sections and click their social icons
  verifyAllManagementSocials() {
    const teamSections = [
      { section: ".elementor-element-a7960e7", socials: [".elementor-element-55bab90", ".elementor-element-6915771", ".elementor-element-a2542ac"] },
      { section: ".elementor-element-9dd7fe6", socials: [".elementor-element-0f8e933", ".elementor-element-dcc2183", ".elementor-element-ef400d0"] },
      { section: ".elementor-element-69d4e69", socials: [".elementor-element-1b2289d", ".elementor-element-639ab80", ".elementor-element-da0ff32"] },
      { section: ".elementor-element-5104325", socials: [".elementor-element-4f4a9ab"] },
    ];

    teamSections.forEach((team) => {
      cy.get(team.section, { timeout: 10000 }).scrollIntoView().should("be.visible");
      cy.wait(1000);

      team.socials.forEach((social) => {
        cy.get(`${social} > .elementor-widget-container > .elementor-social-icons-wrapper > .elementor-grid-item > .elementor-icon`, { timeout: 10000 })
          .should("be.visible")
          .invoke("removeAttr", "target")
          .click({ force: true });
        cy.wait(2000);
        cy.go("back");
        cy.wait(1000);
      });
    });
  }

  // ✅ Verify and interact with the "Join our team" / "Reach Out" section
verifyCareerJoinSection() {
  cy.log("🧭 Scrolling to Career Join Section");

  // 1️⃣ Verify the Reach Out button text and click it
  cy.get(".elementor-button-text", { timeout: 10000 })
    .should("contain.text", "Join our team");

  cy.log("✅ 'Join our team' button text verified");

  cy.get(".elementor-button-content-wrapper", { timeout: 10000 })
    .should("be.visible")
    .click({ force: true });

  cy.log("🚀 'Join our team' (Reach Out) button clicked");

  // 2️⃣ Verify the long assertion text appears after clicking
  cy.contains(
    "Join a team where your passion meets purpose. We’re looking for dynamic individuals ready to make an impact. At Cubera, your growth is our priority.",
    { timeout: 15000 }
  ).should("be.visible");

  cy.log("✅ Long career description text verified");

  // 3️⃣ Click the final button (e.g., Apply / Join / Submit)
  cy.get(".elementor-button", { timeout: 10000 })
    .should("be.visible")
    .click({ force: true });

  cy.log("🎯 Final 'Join / Apply' button clicked successfully");
  cy.fixture("jobsData.json").then((data) => {
  data.jobs.forEach((job) => {
    cy.log(`🔍 Checking job: ${job.title}`);

    // Type job title
    cy.get('[name="search_keywords"]').clear().type(job.title);

    // Loop through each location for this job
    job.locations.forEach((loc) => {
      cy.get('[name="search_location"]').clear().type(loc);
      cy.wait(2000);

      cy.log(`📅 Date in data file: ${job.date}`);
    });
  });
});

}

}

export default AboutPage;
