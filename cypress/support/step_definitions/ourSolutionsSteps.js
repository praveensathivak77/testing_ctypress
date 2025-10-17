import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OurSolutionsPage from "../../page_objects/OurSolutionsPage";

const ourSolutionsPage = new OurSolutionsPage();

Given("I open the Cubera homepage our solutions", () => {
  cy.viewport(1366, 768);
  cy.visit("https://cubera.co/");
  cy.wait(2000);
});

When("I hover over the Our Solutions menu", () => {
  ourSolutionsPage.hoverOnOurSolutionsMenu();});

When("I click the Omnichannel Targeting menu item", () => {
  ourSolutionsPage.clickOmnichannelMenuItem();
});

Then("I validate Omnichannel sections", () => {
  ourSolutionsPage.validateOmnichannelSections();});

When("I click the Identity Graph menu item", () => {
  ourSolutionsPage.clickIdentityGraphMenuItem();
});

Then("I validate Identity Graph sections", () => {
  ourSolutionsPage.validateIdentityGraphSections();});

When("I click the AI Cohort Generation menu item", () => {
  ourSolutionsPage.clickAICohortMenuItem();
});

Then("I validate AI Cohort sections", () => {
  ourSolutionsPage.validateAICohortSections();});

When("I click the Ad Service menu item", () => {
  ourSolutionsPage.clickAdServiceMenuItem();
});

Then("I validate Ad Service sections", () => {
  ourSolutionsPage.validateAdServiceSections();});

When("I click the For Publishers menu item", () => {
  ourSolutionsPage.clickForPublishersMenuItem();
});

Then("I validate For Publishers sections", () => {
  ourSolutionsPage.validateForPublishersSections();
});
