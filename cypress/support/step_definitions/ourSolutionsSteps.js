import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OurSolutionsPage from "../../page_objects/OurSolutionsPage";

const ourSolutionsPage = new OurSolutionsPage();

// ==============================
// 🔹 Common Steps
// ==============================

Given("I open the Cubera homepage and Our Solution", () => {
  cy.viewport(1366, 768);
  cy.visit("https://cubera.co/");
  cy.wait(2000);
});

When("I hover over the Our Solutions menu", () => {
  ourSolutionsPage.hoverOnOurSolutionsMenu();
});


// ==============================
// 🔹 Individual Page Navigations
// ==============================

When("I click the Omnichannel Targeting menu item", () => {
  ourSolutionsPage.clickOmnichannelMenuItem();
});

When("I click the Identity Graph menu item", () => {
  ourSolutionsPage.clickIdentityGraphMenuItem();
});

When("I click the AI Cohort Generation menu item", () => {
  ourSolutionsPage.clickAICohortMenuItem();
});

// ==============================
// 🔹 Page Validation Assertions
// ==============================

Then("I should see the solution section {string}", (headingText) => {
  cy.contains(headingText, { timeout: 15000 })
    .scrollIntoView()
    .should("be.visible")
    .then(() => cy.log(`✅ Verified solution heading: ${headingText}`));
});

// ==============================
// 🔹 Content Validation Flows
// ==============================

Then("I slowly scroll and validate Omnichannel content", () => {
  ourSolutionsPage.runOmnichannelFlow();
});

Then("I slowly scroll and validate Identity Graph content", () => {
  ourSolutionsPage.runIdentityGraphFlow();
});

Then("I slowly scroll and validate AI Cohort Generation content", () => {
  ourSolutionsPage.runAICohortFlow();
});

// ==============================
// 🔹 Navigation Back
// ==============================

Then("I go back to the Our Solutions page", () => {
  cy.go("back");
  cy.wait(2500);
});

When("I click the Ad Service menu item", () => {
  ourSolutionsPage.clickAdServiceMenuItem();
});

Then("I slowly scroll and validate Ad Service content", () => {
  ourSolutionsPage.runAdServiceFlow();
});

When("I click the For Publishers menu item", () => {
  ourSolutionsPage.clickForPublishersMenuItem();
});

Then("I slowly scroll and validate For Publishers content", () => {
  ourSolutionsPage.runForPublishersFlow();
});


