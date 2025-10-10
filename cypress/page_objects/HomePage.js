class HomePage {
  // ---------- Core Navigation ----------
  visit() {
    cy.visit("https://cubera.co/");
  }

  hoverMenu(menu) {
    cy.contains("nav li a", menu, { timeout: 10000 }).realHover();
  }

  clickMenu(menu) {
    cy.contains("nav li a", menu, { timeout: 10000 }).click({ force: true });
  }

  clickLogo() {
    cy.get("header a img:visible", { timeout: 10000 })
      .should("be.visible")
      .first()
      .click({ force: true });
  }

  verifyHomepage() {
    cy.url().should("include", "cubera.co");
    cy.get("header a img:visible").should("be.visible");
    cy.contains("Our Solutions", { timeout: 10000 }).should("be.visible");
    cy.contains(/Transform|Platform|Marketing/i, { timeout: 15000 }).should("be.visible");
  }

  // ---------- Contact Page ----------
  navigateToContact() {
    cy.contains("div.ast-custom-button", "Contact Us", { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });

    cy.get("#wpforms-1653", { timeout: 20000 }).should("be.visible");
  }

  safeType(selector, value) {
    cy.get(selector).clear();
    if (value && value.trim() !== "") {
      cy.get(selector).type(value);
    }
  }

  fillContactForm(data) {
    this.safeType("#wpforms-1653-field_1", data.firstName);
    this.safeType("#wpforms-1653-field_2", data.lastName);
    this.safeType("#wpforms-1653-field_3", data.email);
    this.safeType("#wpforms-1653-field_6", data.phone);
    this.safeType("#wpforms-1653-field_4", data.message);

    if (data.product) {
      cy.contains("label", data.product).click({ force: true });
    }

    cy.get('[name="wpforms[fields][7][]"]').check({ force: true });

    cy.get('#wpforms-submit-1653:visible')
      .should("be.enabled")
      .first()
      .click({ force: true });
  }

  verifyValidationErrors() {
    cy.get(".wpforms-error", { timeout: 10000 }).should("be.visible");
  }

  // ---------- Cookies & Calendly ----------
  closeCookies() {
    cy.get("body").then($body => {
      if ($body.find("button.onetrust-close-btn-handler").length) {
        cy.get("button.onetrust-close-btn-handler").first().click({ force: true });
      } else if ($body.find("button:contains('Accept')").length) {
        cy.contains("button", "Accept").first().click({ force: true });
      } else {
        cy.log("No cookie popup found, continuing...");
      }
    });
  }

  verifyCalendlyModal() {
    cy.get("div.calendly-overlay", { timeout: 15000 }).should("be.visible");
  }

  closeCalendlyModal() {
    cy.get("div.calendly-overlay", { timeout: 10000 }).then($overlay => {
      if ($overlay.find('button[aria-label="Close"]').length) {
        cy.get('button[aria-label="Close"]').first().click({ force: true });
      } else if ($overlay.find('button.calendly-close-button').length) {
        cy.get('button.calendly-close-button').first().click({ force: true });
      } else if ($overlay.find('button[title="Close"]').length) {
        cy.get('button[title="Close"]').first().click({ force: true });
      } else {
        cy.log("ℹ️ No Calendly close button found — skipping");
      }
    });
  }

  // ---------- Helpers ----------
  simulateScroll() {
    cy.wait(1000);
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(1000);
    cy.scrollTo("top", { duration: 2000 });
  }

  // ---------- Privacy Policy ----------
  viewPrivacyPolicy() {
    cy.get(".wpforms-field-label-inline > a", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible")
      .invoke("removeAttr", "target") // same tab
      .click({ force: true });

    cy.location("pathname", { timeout: 10000 }).should("include", "privacy");

    this.simulateScroll();   // ✅ reuses helper
    this.clickLogo();        // ✅ return home
    this.verifyHomepage();   // ✅ confirm home
  }

  // ---------- Reach Out ----------
 clickReachOut() {
  cy.contains("a.elementor-button.elementor-button-link.elementor-size-sm", "Reach Out", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
}
  verifyReachOutPage() {
    cy.contains(".elementor-heading-title", /get in touch with us/i, { timeout: 15000 })
      .should("be.visible");
  }
  clickLearnmore(){
cy.get('.elementor-element-ad3ce26 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text')      .scrollIntoView()
      .should("be.visible")
      .click({ force: true});
  }
  verifyLearnmore() {
    cy.contains(".elementor-heading-title", /We are a trusted partner/i, { timeout: 15000 })
      .should("be.visible");
  }

  scrollToCarousel() {
    cy.get(".swiper-slide-active .swiper-slide-image", { timeout: 10000 })
      .first()
      .scrollIntoView({ duration: 1000, easing: "linear" })
      .should("be.visible");
  }

  // Click right arrow multiple times
  clickRightArrow(times) {
    Cypress._.times(times, () => {
      cy.get(".e-font-icon-svg.e-eicon-chevron-right", { timeout: 10000 })
        .click({ force: true });
      cy.wait(1000); // wait for slide animation
    });
  }

  // Click left arrow multiple times
  clickLeftArrow(times) {
    Cypress._.times(times, () => {
      cy.get(".e-font-icon-svg.e-eicon-chevron-left", { timeout: 10000 })
        .click({ force: true });
      cy.wait(1000); // wait for slide animation
    });
  }
  verifyslideimage() {
    cy.contains(".elementor-heading-title", /We are a trusted partner/i, { timeout: 15000 })
      .should("be.visible");
  }

   scrollToAIPoweredReach() {
    cy.get(".elementor-element-54dcb6a", { timeout: 15000 })
      .scrollIntoView({ duration: 1000, easing: "linear" })
      .should("be.visible");
  }

  // Hover left → middle → right with verification
  hoverCardsLeftToRight() {
    const selectors = [
      ".elementor-element-674c9ea",  // left card
      ".elementor-element-f4268d6",  // middle card
      ".elementor-element-1ff1315"   // right card
    ];

    selectors.forEach((sel) => {
      cy.get(sel)
        .should("be.visible")
        .realHover()
        .invoke("css", "transform")   // check transform applied
        .then((transform) => {
          // Log for debugging (won't fail if no transform)
          cy.log(`Transform on hover: ${transform}`);
        });
      cy.wait(1000);
    });
  }

  // Hover right → middle → left with verification
  hoverCardsRightToLeft() {
    const selectors = [
      ".elementor-element-1ff1315",  // right card
      ".elementor-element-f4268d6",  // middle card
      ".elementor-element-674c9ea"   // left card
    ];

    selectors.forEach((sel) => {
      cy.get(sel)
        .should("be.visible")
        .realHover()
        .invoke("css", "transform")
        .then((transform) => {
          cy.log(`Transform on hover: ${transform}`);
        });
      cy.wait(1000);
    });
  }
 // ✅ Core Services scroll
  scrollToCoreServices() {
    cy.contains("h2", "Core Service Offerings", { timeout: 10000 })
      .scrollIntoView({ duration: 1500 })
      .should("be.visible");
    cy.wait(1000);
  }

  // -------- Omnichannel --------
  clickOmnichannelTargeting() {
    cy.contains(".elementor-heading-title", /omnichannel targeting/i, { timeout: 10000 })
      .scrollIntoView({ duration: 1000 })
      .click({ force: true });
  }

  verifyOmnichannelTargetingPage() {
    cy.contains("h1, h2, h3", /omnichannel targeting/i, { timeout: 15000 })
      .should("be.visible");
  }

  // -------- Identity Graph --------
  clickIdentityGraph() {
    cy.contains(".elementor-heading-title", /identity graph/i, { timeout: 10000 })
      .scrollIntoView({ duration: 1000 })
      .click({ force: true });
  }

  verifyIdentityGraphPage() {
    cy.contains("h1, h2, h3", /identity graph/i, { timeout: 15000 })
      .should("be.visible");
  }

  // -------- AI Cohort Generation --------
  clickAICohortGeneration() {
    cy.contains(".elementor-heading-title", /ai cohort generation/i, { timeout: 10000 })
      .scrollIntoView({ duration: 1000 })
      .click({ force: true });
  }

  verifyAICohortGenerationPage() {
    cy.contains("h1, h2, h3", /ai cohort generation/i, { timeout: 15000 })
      .should("be.visible");
  }

  // -------- Ad Service --------
  clickAdService() {
    cy.contains(".elementor-heading-title", /ad service/i, { timeout: 10000 })
      .scrollIntoView({ duration: 1000 })
      .click({ force: true });
  }

  verifyAdServicePage() {
    cy.contains("h1, h2, h3", /ad service/i, { timeout: 15000 })
      .should("be.visible");
  }
  // ✅ Return back and scroll to Core Service Offerings
returnToCoreServices() {
  cy.go("back"); // navigate back
  this.scrollToCoreServices(); // re-scroll to section
}



// ---------- Client Testimonials ----------
  scrollToClientTestimonials() {
    cy.get(
      ".elementor-element-c6f2ba0 > .e-con-inner > .elementor-element > .elementor-widget-container > .elementor-heading-title",
      { timeout: 10000 }
    )
      .scrollIntoView()
      .should("be.visible");
  }

  verifyClientTestimonialsHeading(expectedText) {
    cy.get(
      ".elementor-element-c6f2ba0 > .e-con-inner > .elementor-element > .elementor-widget-container > .elementor-heading-title",
      { timeout: 10000 }
    )
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq(expectedText);
      });
  }

  // ---------- Carousel ----------
  clickCarouselArrows() {
    // Prev 2 times
    cy.get(
      ".e-con-inner > .elementor-element > .elementor-widget-container > .elementor-image-carousel-wrapper > .elementor-swiper-button-prev",
      { timeout: 10000 }
    ).then(($el) => {
      for (let i = 0; i < 2; i++) {
        cy.wrap($el).click({ force: true });
        cy.wait(500);
      }
    });

    // Next 2 times
    cy.get(
      ".e-con-inner > .elementor-element > .elementor-widget-container > .elementor-image-carousel-wrapper > .elementor-swiper-button-next",
      { timeout: 10000 }
    ).then(($el) => {
      for (let i = 0; i < 2; i++) {
        cy.wrap($el).click({ force: true });
        cy.wait(500);
      }
    });
  }
scrollToRecentBlogs() {
    cy.contains("Find out more in our recent blogs")
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");

    cy.wait(2000);
  }

  clickBlogImage() {
    cy.get('.post-id-2680 > .ultp-block-content-wrap > .ultp-block-entry-content > .ultp-block-image > a > img')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible")
      .click();

    cy.wait(2000);
  }

  clickSecondBlogTitle() {
    cy.get('.post-id-2644 > .ultp-block-content-wrap > .ultp-block-entry-content > .ultp-block-entry-heading > .ultp-block-title > a')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible")
      .click();

    cy.wait(2000);
  }

  clickThirdBlogTitle() {
    cy.get('.post-id-1477 > .ultp-block-content-wrap > .ultp-block-entry-content > .ultp-block-entry-heading > .ultp-block-title > a')
      .scrollIntoView({ duration: 2000 })
      .should("be.visible")
      .click();

    cy.wait(2000);
  }

  returnToHomepage() {
    cy.go("back");
    cy.contains("Find out more in our recent blogs", { timeout: 10000 }).should("be.visible");
    cy.wait(2000);
  }
  scrollToTrustedPartners() {
    // scroll to the section heading to ensure it's visible
    cy.contains("Our Trusted Partners", { timeout: 10000 })
      .scrollIntoView({ duration: 4000, offset: { top: -100, left: 0 } }) // smooth + adjust
      .should("be.visible");

    cy.wait(2000); // wait so we can observe
  }
  scrollToFAQs() {
    cy.contains("Cubera FAQs for more information", { timeout: 10000 })
      .scrollIntoView({ duration: 4000 })
      .should("be.visible");

    cy.wait(2000);
  }

  clickFAQs() {
    // Click 1st FAQ
    cy.get('#e-n-accordion-item-1760 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-closed')
      .click({ force: true });
    cy.wait(1500);

    // Click 2nd FAQ
    cy.get('#e-n-accordion-item-1761 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-closed')
      .click({ force: true });
    cy.wait(1500);

    // Click 3rd FAQ
    cy.get('#e-n-accordion-item-1762 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-opened')
      .click({ force: true });
    cy.wait(1500);

    // Click 4th FAQ
    cy.get('#e-n-accordion-item-1763 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-closed')
      .click({ force: true });
    cy.wait(1500);

    // Click 5th FAQ
    cy.get('#e-n-accordion-item-1764 > .e-n-accordion-item-title > .e-n-accordion-item-title-icon > .e-closed')
      .click({ force: true });
    cy.wait(1500);
  }

  verifyFAQAnswers() {
    cy.contains("Cubera’s AdTech ecosystem includes Edge").should("be.visible");
    cy.contains("Cubera uses its proprietary Identity Graph").should("be.visible");
    cy.contains("Deep Learning powers Cubera’s platforms").should("be.visible");
    cy.contains("Cubera’s ecosystem optimizes").should("be.visible");
    cy.contains("Vertex is Cubera’s AdExchange").should("be.visible");
  }
  scrollToPageEnd() {
    cy.scrollTo("bottom", { duration: 5000 }); // smooth scroll to end
    cy.wait(2000); // pause to observe
}
scrollToPageEnd() {
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(1000);
  }

  clickFooterLink(linkName) {
  switch (linkName.toLowerCase()) {
    case "home":
      cy.get('footer a[href="https://cubera.co/"]').click({ force: true });
      break;
    case "about":
      cy.get('footer a[href="https://cubera.co/about-us/"]').click({ force: true });
      break;
    case "solutions":
      cy.get('footer a[href="https://cubera.co/our-solutions/"]').click({ force: true });
      break;
    case "platforms":
      cy.get('footer a[href="https://cubera.co/platforms/"]').click({ force: true });
      break;
    case "contact":
      cy.get('footer a[href="https://cubera.co/contact/"]').click({ force: true });
      break;
    default:
      throw new Error("Invalid footer link name: " + linkName);
  }
  cy.wait(4000);
}
scrollToPageEnd() {
    cy.scrollTo("bottom", { duration: 2000 });
    cy.wait(1000);
  }

  clickQuickLink(linkName) {
    switch (linkName.toLowerCase()) {
      case "cube":
        cy.get('footer a[href="https://cubera.co/cube/"]').click({ force: true });
        break;
      case "edge":
        cy.get('footer a[href="https://cubera.co/edge/"]').click({ force: true });
        break;
      case "vertex":
        cy.get('footer a[href="https://cubera.co/vertex/"]').click({ force: true });
        break;
      case "identity graph":
        cy.get('footer a[href="https://cubera.co/identity-graph/"]').click({ force: true });
        break;
      case "privacy policy":
        cy.get('footer a[href="https://cubera.co/privacy-policy/"]').click({ force: true });
        break;
      case "terms":
        cy.get('footer a[href="https://cubera.co/terms/"]').click({ force: true });
        break;
      case "disclaimer":
        cy.get('footer a[href="https://cubera.co/disclaimer/"]').click({ force: true });
        break;
      case "cookie policy":
        cy.get('footer a[href="https://cubera.co/cookie-policy/"]').click({ force: true });
        break;
      case "career":
        cy.get('footer a[href="https://cubera.co/career/"]').click({ force: true });
        break;
      case "glossary":
        cy.get('footer a[href="https://cubera.co/glossary/"]').click({ force: true });
        break;
      default:
        throw new Error("Invalid quick link name: " + linkName);
    }
    cy.wait(2000);
  }

  clickCuberaLogo() {
  cy.get('img.attachment-full.size-full.wp-image-503')
    .first()
    .click({ force: true });

  cy.wait(2000);
}
}
export default HomePage;