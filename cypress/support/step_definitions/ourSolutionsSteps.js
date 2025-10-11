import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OurSolutionsPage from "../../page_objects/OurSolutionsPage";

const ourSolutionsPage = new OurSolutionsPage();

// ✅ Open homepage
Given("I open the Cubera homepage and Our Solution", () => {
  cy.viewport(1366, 768);
  cy.visit("https://cubera.co/");
  cy.wait(2000);
});

// ✅ Hover over the Our Solutions menu
When("I hover over the Our Solutions menu", () => {
  ourSolutionsPage.hoverOnOurSolutionsMenu();
});

// ✅ Click Omnichannel Targeting
When("I click the Omnichannel Targeting menu item", () => {
  ourSolutionsPage.clickOmnichannelMenuItem();
});

// ✅ Clean heading assertion
Then("I should see the cleanly {string}", (headingText) => {
  cy.contains(headingText, { timeout: 15000 }).should("be.visible");
});

When("I click the Reachout", () => {
  ourSolutionsPage.clickReachoutButton();
});

Then("I should see {string}", (headingText) => {
  cy.contains(headingText, { timeout: 15000 }).should("be.visible");
});

Then("I go back to the Omnichannel Targeting page", () => {
  cy.go("back");
  cy.wait(2000);
});

Then("I slowly scroll and validate Omnichannel content", () => {
  ourSolutionsPage.validateOmnichannelContent();
});
