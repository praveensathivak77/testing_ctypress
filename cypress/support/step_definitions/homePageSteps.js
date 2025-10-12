import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../page_objects/HomePage";
import "cypress-real-events";

const homePage = new HomePage();

Given("I open the Cubera homepage", () => {
  cy.viewport(1366, 768);
  homePage.visit();
});

When("I choose {string}", (navigationType) => {
  if (navigationType === "navigate main menus") {
    const menus = ["Our Solutions", "Our Platforms", "Insights", "Academy","About"];
    menus.forEach(menu => {
      homePage.hoverMenu(menu);
      homePage.clickMenu(menu);
      cy.wait(1000);
      homePage.clickLogo();
      homePage.verifyHomepage();
    });
  } else {
    cy.log("Skipping menus, going directly to contact page");
  }
});

When("I go to the contact page", () => {
  homePage.navigateToContact();
});

When(
  "I fill out the contact form with {string} {string} {string} {string} {string} {string}",
  (firstName, lastName, email, phone, product, message) => {
    const data = { firstName, lastName, email, phone, product, message };
    homePage.fillContactForm(data);
  }
);

When("I try all invalid form submissions", () => {
  cy.fixture("invaliddata.json").then(users => {
    users.forEach(user => {
      homePage.fillContactForm(user);
      homePage.verifyValidationErrors();
      homePage.clickLogo();
      homePage.verifyHomepage();
      homePage.navigateToContact();
    });
  });
});

Then("I should see the Calendly modal", () => {
  homePage.verifyCalendlyModal();
});

Then("I close the Calendly modal", () => {
  homePage.closeCalendlyModal();
});

Then("I close the cookies popup", () => {
  homePage.closeCookies();
});

Then("I return to the homepage by clicking the logo", () => {
  homePage.clickLogo();
  homePage.verifyHomepage();
});

Then("I should be back on the homepage", () => {
  homePage.verifyHomepage();
});

Then("I view the Privacy Policy and return", () => {
  homePage.viewPrivacyPolicy();
  homePage.clickLogo();
  homePage.verifyHomepage();
});

When("I click on the Reach Out button", () => {
  homePage.clickReachOut();
});

Then("I should see the Reach Out page", () => {
  homePage.verifyReachOutPage();
});

Then("I return to the homepage", () => {
  homePage.clickLogo();
});

When("I click on the Learn more button", () => {
  homePage.clickLearnmore();
});

Then("I should see the We are a trusted partner page", () => {
  homePage.verifyLearnmore();
});

Then("I return to the homepage of cubera", () => {
  homePage.clickLogo();
});

When("I scroll to the carousel section", () => {
  homePage.scrollToCarousel();
});

When("I click the right arrow {int} times", (times) => {
  homePage.clickRightArrow(times);
});

When("I click the left arrow {int} times", (times) => {
  homePage.clickLeftArrow(times);
});

When("I scroll to the AI Powered Reach section", () => {
  homePage.scrollToAIPoweredReach();
});

When("I hover over the AI Powered Reach cards from left to right", () => {
  homePage.hoverCardsLeftToRight();
});

When("I hover back over the AI Powered Reach cards from right to left", () => {
  homePage.hoverCardsRightToLeft();
});

Then("the AI Powered Reach section should remain visible", () => {
  cy.get(".elementor-element-54dcb6a", { timeout: 10000 }).should("be.visible");
});

When("I scroll to the Core Service Offerings section", () => {
  homePage.scrollToCoreServices();
});

When("I click the Omnichannel Targeting", () => {
  homePage.clickOmnichannelTargeting();
});

Then("I should see the Omnichannel Targeting page", () => {
  homePage.verifyOmnichannelTargetingPage();
});

Then("I return to the Core Service Offerings section", () => {
  homePage.returnToCoreServices();
});

When("I click the Identity Graph", () => {
  homePage.clickIdentityGraph();
});

Then("I should see the Identity Graph page", () => {
  homePage.verifyIdentityGraphPage();
});

When("I click the AI Cohort Generation", () => {
  homePage.clickAICohortGeneration();
});

Then("I should see the AI Cohort Generation page", () => {
  homePage.verifyAICohortGenerationPage();
});

When("I click the Ad Service", () => {
  homePage.clickAdService();
});
Then("I should see the Ad Service page", () => {
  homePage.verifyAdServicePage();
});

Then("I return to the Core Service Offerings sections", () => {
  homePage.returnToCoreServices();
});

When("I scroll to the client testimonials section", () => {
  homePage.scrollToClientTestimonials();
});

Then("I should see the {string} heading", (headingText) => {
  homePage.verifyClientTestimonialsHeading(headingText);
});

Then("I click the carousel arrows twice each", () => {
  homePage.clickCarouselArrows();
});

When("I scroll to the recent blogs section", () => {
  homePage.scrollToRecentBlogs();
});

Then("I should see the {string} heading1", (headingText) => {
  cy.contains("h2", headingText, { timeout: 10000 }).should("be.visible");
});

Then("I click the image of the first blog", () => {
  homePage.clickBlogImage();
});

Then("I should see the {string} blog page", (blogHeading) => {
  cy.contains("h1, h2", blogHeading, { timeout: 10000 }).should("be.visible");
});

Then("I return to the homepage and blog", () => {
  homePage.returnToHomepage();
});

Then("I click the title link of the second blog", () => {
  homePage.clickSecondBlogTitle();
});

Then("I click the title link of the third blog", () => {
  homePage.clickThirdBlogTitle();
});

When("I scroll to the Our Trusted Partners section", () => {
  homePage.scrollToTrustedPartners();
});

Then("I should see the {string} heading3", (headingText) => {
  cy.contains("h2, h3", headingText, { timeout: 10000 }).should("be.visible");
});

When("I scroll to the FAQs section", () => {
  homePage.scrollToFAQs();
});

When("I click each FAQ one by one", () => {
  homePage.clickFAQs();
});

Then("I should see correct answers displayed", () => {
  homePage.verifyFAQAnswers();
});

Then("I scroll to the bottom of the page", () => {
  homePage.scrollToPageEnd();
});

When("I scroll to the bottom of the page 1", () => {
  homePage.scrollToPageEnd();
});

When("I click and verify all main footer menu links sequentially", () => {
  homePage.visitAllMainFooterMenuLinks();
});
When("I scroll to the bottom of the page 2", () => {
  cy.scrollTo("bottom", { duration: 1000 });
  cy.wait(1000);
});

When("I click, verify, and return for all footer menu links with assertions", () => {
  homePage.visitAllFooterLinksWithAssertions();
});