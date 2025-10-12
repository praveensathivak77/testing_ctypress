import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OurSolutionsPage from "../../page_objects/OurSolutionsPage";

const ourSolutionsPage = new OurSolutionsPage();

// ✅ Open homepage
Given("I open the Cubera homepage and Our Solution", () => {
  cy.viewport(1366, 768);
  cy.visit("https://cubera.co/");
  cy.wait(2000);
});

// ✅ Hover over Our Solutions menu
When("I hover over the Our Solutions menu", () => {
  ourSolutionsPage.hoverOnOurSolutionsMenu();
});

// ✅ Click Omnichannel Targeting
When("I click the Omnichannel Targeting menu item", () => {
  ourSolutionsPage.clickOmnichannelMenuItem();
});

// ✅ Click Identity Graph
When("I click the Identity Graph menu item", () => {
  ourSolutionsPage.clickIdentityGraphMenuItem();
});

// ✅ Assertions
Then("I should see the text {string}", (headingText) => {
  cy.contains(headingText, { timeout: 15000 }).should("be.visible");
});

// ✅ Click Reachout
When("I click the Reachout", () => {
  ourSolutionsPage.clickReachoutButton();
});

// ✅ Go back
Then("I go back to the Omnichannel Targeting page", () => {
  cy.go("back");
  cy.wait(2000);
});

// ✅ Validate Omnichannel
Then("I slowly scroll and validate Omnichannel content", () => {
  ourSolutionsPage.runOmnichannelFlow();
});

// ✅ Validate Identity Graph
Then("I slowly scroll and validate Identity Graph content", () => {
  ourSolutionsPage.runIdentityGraphFlow();
});
