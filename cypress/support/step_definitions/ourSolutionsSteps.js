import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OurSolutionsPage from "../../page_objects/OurSolutionsPage";

const ourSolutionsPage = new OurSolutionsPage();

// ============================
// 🔹 Background / Common Steps
// ============================

Given("I open the Cubera homepage and Our Solution", () => {
  ourSolutionsPage.visitHomepage();
});

When("I hover over the Our Solutions menu", () => {
  ourSolutionsPage.hoverOnOurSolutionsMenu();
});

// ============================
// 🔹 Omnichannel Targeting
// ============================

When("I click the Omnichannel Targeting menu item", () => {
  ourSolutionsPage.clickMenuItem("Omnichannel Targeting");
});

Then('I should see the solution section "Omnichannel Targeting"', () => {
  cy.contains("Omnichannel Targeting", { timeout: 10000 }).should("be.visible");
});

Then("I slowly scroll and validate Omnichannel content", () => {
  ourSolutionsPage.validateOmnichannelContent();
});

Then("I go back to the Our Solutions page", () => {
  ourSolutionsPage.navigateBack();
});

// ============================
// 🔹 Identity Graph
// ============================

When("I click the Identity Graph menu item", () => {
  ourSolutionsPage.clickMenuItem("Identity Graph");
});

Then('I should see the solution section "Identity Graph"', () => {
  cy.contains("Identity Graph", { timeout: 10000 }).should("be.visible");
});

Then("I slowly scroll and validate Identity Graph content", () => {
  ourSolutionsPage.validateIdentityGraphContent();
});

Then("I go back to the Our Solutions page 1", () => {
  ourSolutionsPage.navigateBack();
});

// ============================
// 🔹 AI Cohort Generation
// ============================

When("I click the AI Cohort Generation menu item", () => {
  ourSolutionsPage.clickMenuItem("AI Cohort Generation");
});

Then('I should see the solution section "AI Cohort Generation"', () => {
  cy.contains("AI Cohort Generation", { timeout: 10000 }).should("be.visible");
});

Then("I slowly scroll and validate AI Cohort Generation content", () => {
  ourSolutionsPage.validateAICohortContent();
});

Then("I go back to the Our Solutions page 2", () => {
  ourSolutionsPage.navigateBack();
});

// ============================
// 🔹 Ad Service
// ============================

When("I click the Ad Service menu item", () => {
  ourSolutionsPage.clickMenuItem("Ad Service");
});

Then('I should see the solution section "Ad Service"', () => {
  cy.contains("Ad Service", { timeout: 10000 }).should("be.visible");
});

Then("I slowly scroll and validate Ad Service content", () => {
  ourSolutionsPage.validateAdServiceContent();
});

Then("I go back to the Our Solutions page 3", () => {
  ourSolutionsPage.navigateBack();
});

// ============================
// 🔹 For Publishers
// ============================

When("I click the For Publishers menu item", () => {
  ourSolutionsPage.clickMenuItem("For Publishers");
});

Then('I should see the solution section "For Publishers"', () => {
  cy.contains("For Publishers", { timeout: 10000 }).should("be.visible");
});

Then("I slowly scroll and validate For Publishers content", () => {
  ourSolutionsPage.validateForPublishersContent();
});

Then("I go back to the Our Solutions page 4", () => {
  ourSolutionsPage.navigateBack();
});
