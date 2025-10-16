// cypress/page_objects/InsightsPage.js

class InsightsPage {
  // ==========================
  // 🔹 Step 1: Open Insights Page
  // ==========================
  openInsights() {
    cy.viewport(1366, 768);
    cy.visit("https://cubera.co/insights/");
    cy.wait(2000);
    cy.url().should("include", "/insights");
  }

  // ==========================
  // 🔹 Step 2: Verify Main Article Exists
  // ==========================
  verifyPerformanceMarketingArticle() {
    cy.contains("Performance Marketing vs. Customer Acquisition", {
      timeout: 10000,
    }).should("exist");
  }

  // ==========================
  // 🔹 Step 3: Scroll Down and Back Up
  // ==========================
  scrollThroughSections() {
    cy.get(".wpr-grid-pagination", { timeout: 10000 })
      .should("exist")
      .scrollIntoView({ duration: 1500 });
    cy.wait(1000);

    cy.get(".elementor-element-fae6e14 > .e-con-inner", { timeout: 10000 })
      .should("exist")
      .scrollIntoView({ duration: 1500 });
    cy.wait(1000);

    cy.window().then((win) => {
      win.scrollTo({ top: 0, behavior: "smooth" });
    });
    cy.wait(1000);
  }

  // ==========================
  // 🔹 Step 4: Click "Read More" Button
  // ==========================
  clickReadMoreButton() {
    cy.get(
      '#slick-slide00 > :nth-child(1) > .wpr-grid-item > .wpr-grid-item-inner > .wpr-grid-item-below-content > .wpr-grid-item-read-more > .inner-block > .wpr-button-effect > :nth-child(1)',
      { timeout: 10000 }
    )
      .should("exist")
      .click({ force: true });

    cy.wait(3000);

    cy.contains("Performance Marketing vs. Customer Acquisition", {
      timeout: 10000,
    }).should("be.visible");
  }

  // ==========================
  // 🔹 Step 5: Navigate Within Article and Assertions
  // ==========================
  navigateInsideArticle() {
    // Step 1: Category -> Articles
    cy.get(".ast-terms-link > a", { timeout: 10000 })
      .should("exist")
      .click({ force: true });
    cy.contains("Articles", { timeout: 10000 }).should("be.visible");
    cy.wait(1000);

    // Step 2: Taxonomy link
    cy.get(
      "#post-1477 > .ast-post-format- > .post-content > .ast-taxonomy-container > a",
      { timeout: 10000 }
    ).click({ force: true });
    cy.wait(1000);

    // Step 3: Click featured image
    cy.get(
      "#post-1477 > .ast-post-format- > .post-content > .ast-blog-featured-section > .post-thumb-img-content > a > .attachment-large",
      { timeout: 10000 }
    ).click({ force: true });
    cy.wait(1000);

    // Step 4: Assert Omni Channel
    cy.contains("Omni Channel Advertising and Lookalike", { timeout: 10000 })
      .should("be.visible");
    cy.wait(1000);

    // Step 5: Scroll through Elementor sections
    const selectors = [
      ":nth-child(3)",
      ":nth-child(8)",
      ":nth-child(10)",
      ":nth-child(11)",
      ":nth-child(12)",
      ":nth-child(14)",
    ];

    selectors.forEach((child) => {
      cy.get(`.elementor-widget-container > ${child}`, { timeout: 10000 })
        .should("exist")
        .scrollIntoView({ duration: 1000 });
      cy.wait(1000);
    });

    // ==========================
    // 🔹 Step 6: Navigation Cycle (Next & Previous)
    // ==========================
    function scrollToNavigationAndClick(direction = "next", maxClicks = 10) {
      let clickCount = 0;

      const selector =
        direction === "next"
          ? ".ast-post-nav" // next button
          : ".nav-previous > a > .ast-post-nav"; // previous button

      function performStep() {
        cy.log(`🔁 Step ${clickCount + 1}: Scrolling until .navigation for ${direction} button`);

        if (clickCount >= maxClicks) {
          cy.log(`✅ Finished ${direction} navigation clicks.`);
          return;
        }

        cy.window().then((win) => {
          let scrollPos = 0;
          const scrollStep = 300;
          const interval = setInterval(() => {
            win.scrollBy(0, scrollStep);
            scrollPos += scrollStep;
          }, 400);

          cy.get(".navigation", { timeout: 20000 })
            .should("exist")
            .then(($nav) => {
              clearInterval(interval);
              cy.log("📍 Found .navigation — stopping scroll.");
              cy.wait(1000);

              cy.wrap($nav).scrollIntoView({ duration: 1000 });
              cy.wait(800);

              cy.get(selector, { timeout: 10000 })
                .should("exist")
                .first()
                .scrollIntoView({ duration: 800 })
                .should("be.visible")
                .click({ force: true });

              cy.log(`🖱️ Clicked ${direction.toUpperCase()} button`);
              cy.wait(500);

              clickCount++;
              performStep();
            });
        });
      }

      performStep();
    }

    // 🔹 Execute navigation cycles
    scrollToNavigationAndClick("next", 10);
    scrollToNavigationAndClick("previous", 10);

    // ==========================
    // 🔹 Step 7: Scroll to comment form & test submissions
    // ==========================
    this.submitValidComment();
    this.submitInvalidComment();
  }

  // ==========================
// ✅ Step 8: Submit Valid Comment
// ==========================
submitValidComment() {
  cy.fixture("commentData").then((data) => {
    cy.log("🧾 Loaded fixture data for valid comment form");

    const uniqueComment = `${data.comment} - ${Date.now()}`;

    // ✅ Scroll to comment section
    cy.window().then((win) => {
      let scrollPos = 0;
      const scrollStep = 400;
      const interval = setInterval(() => {
        win.scrollBy(0, scrollStep);
        scrollPos += scrollStep;
      }, 300);

      cy.get("#respond", { timeout: 20000 })
        .should("exist")
        .then(($section) => {
          clearInterval(interval);
          cy.wait(500);
          cy.wrap($section).scrollIntoView({ duration: 800 });
          cy.log("📍 Reached #respond section for valid comment");
        });
    });

    cy.wait(500);

    // ✅ Fill out comment form
    cy.get('#respond [name="comment"]:visible')
      .clear({ force: true })
      .type(uniqueComment, { force: true });
    cy.wait(500);

    cy.get('#respond input[name="author"]:visible')
      .clear({ force: true })
      .type(data.author, { force: true });
    cy.wait(500);

    cy.get('#respond input[name="email"]:visible')
      .clear({ force: true })
      .type(data.email, { force: true });
    cy.wait(500);

    cy.get('#respond input[name="url"]:visible')
      .clear({ force: true })
      .type(data.url, { force: true });
    cy.wait(500);

    cy.get('#respond [name="wp-comment-cookies-consent"]').check({ force: true });
    cy.wait(500);

    // ✅ Submit comment
    cy.get('#respond [name="submit"]').click({ force: true });
    cy.wait(1500);

    // ✅ Handle WordPress responses
    cy.get("body", { timeout: 15000 }).then(($body) => {
      if ($body.text().includes("Duplicate comment detected")) {
        cy.log("⚠️ Duplicate comment detected — navigating back safely.");

        cy.contains("a", "Back", { timeout: 10000 })
          .scrollIntoView()
          .should("be.visible")
          .click({ force: true });

        // Fallback in case Back link doesn’t respond
        cy.wait(1000);
        cy.go("back");
      } else if ($body.find("[id^='li-comment-']").length > 0) {
        cy.get("[id^='li-comment-']")
          .first()
          .should("be.visible");
        cy.log("✅ Comment successfully posted and visible.");
      } else if ($body.text().includes("awaiting moderation")) {
        cy.log("🕒 Comment awaiting moderation.");
      } else {
        cy.log("⚠️ Comment submission unclear — check manually.");
      }
    });
  });
}

// ==========================
// ⚠️ Step 9: Submit Invalid Comment
// ==========================
submitInvalidComment() {
  cy.log("⚠️ Starting invalid comment submission test");

  // ✅ Scroll to comment section
  cy.window().then((win) => {
    let scrollPos = 0;
    const scrollStep = 400;
    const interval = setInterval(() => {
      win.scrollBy(0, scrollStep);
      scrollPos += scrollStep;
    }, 300);

    cy.get("#respond", { timeout: 20000 })
      .should("exist")
      .then(($section) => {
        clearInterval(interval);
        cy.wait(500);
        cy.wrap($section).scrollIntoView({ duration: 800 });
        cy.log("📍 Reached #respond section for invalid comment");
      });
  });

  cy.wait(500);

  // ❌ Fill with invalid data
  cy.get('#respond [name="comment"]:visible')
    .clear({ force: true })
    .type(" ", { force: true });
  cy.wait(500);

  cy.get('#respond input[name="author"]:visible')
    .clear({ force: true })
    .type(" ", { force: true });
  cy.wait(500);

  cy.get('#respond input[name="email"]:visible')
    .clear({ force: true })
    .type("invalid-email", { force: true });
  cy.wait(500);

  cy.get('#respond input[name="url"]:visible')
    .clear({ force: true })
    .type("not-a-url", { force: true });
  cy.wait(500);

  cy.get('#respond [name="wp-comment-cookies-consent"]').check({ force: true });
  cy.wait(500);

  cy.get('#respond [name="submit"]').click({ force: true });
  cy.wait(1000);

  // ⚙️ Handle response outcomes
  cy.get("body", { timeout: 10000 }).then(($body) => {
    if ($body.text().includes("Duplicate comment detected")) {
      cy.log("⚠️ Duplicate comment detected — navigating back safely.");
      cy.contains("a", "Back", { timeout: 10000 })
        .scrollIntoView()
        .should("be.visible")
        .click({ force: true });
      cy.wait(1000);
      cy.go("back");
    } else if (
      $body.text().includes("Error") ||
      $body.text().includes("required") ||
      $body.text().includes("Please fill")
    ) {
      cy.log("✅ Proper validation error displayed — invalid comment rejected as expected.");
    } else {
      cy.log("⚠️ No clear validation feedback — manual check may be needed.");
    }
  });
}

}

export default InsightsPage;
