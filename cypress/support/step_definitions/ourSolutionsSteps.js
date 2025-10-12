import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OurSolutionsPage from "../../page_objects/OurSolutionsPage";

const ourSolutionsPage = new OurSolutionsPage();

// ✅ Common Step: Open Homepage
Given("I open the Cubera homepage and Our Solution", () => {
  cy.viewport(1366, 768);
  cy.visit("https://cubera.co/");
  cy.wait(2000);
});

// ✅ Hover
When("I hover over the Our Solutions menu", () => {
  ourSolutionsPage.hoverOnOurSolutionsMenu();
});

// ✅ Menu clicks
When("I click the Omnichannel Targeting menu item", () => {
  ourSolutionsPage.clickOmnichannelMenuItem();
});

When("I click the Identity Graph menu item", () => {
  ourSolutionsPage.clickIdentityGraphMenuItem();
});

When("I click the AI Cohort Generation menu item", () => {
  ourSolutionsPage.clickAICohortMenuItem();
});

// ✅ Assertions
Then("I should see the og {string}", (headingText) => {
  cy.contains(headingText, { timeout: 15000 }).should("be.visible");
});

// ✅ Reachout
When("I click the Reachout", () => {
  ourSolutionsPage.clickReachoutButton();
});

// ✅ Go back
Then("I go back to the Omnichannel Targeting page", () => {
  cy.go("back");
  cy.wait(2000);
});

// ✅ Validations
Then("I slowly scroll and validate Omnichannel content", () => {
  ourSolutionsPage.runOmnichannelFlow();
});

Then("I slowly scroll and validate Identity Graph content", () => {
  ourSolutionsPage.runIdentityGraphFlow();
});

Then("I slowly scroll and validate AI Cohort Generation content", () => {
  ourSolutionsPage.runAICohortFlow();
});
