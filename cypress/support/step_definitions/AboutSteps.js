import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AboutPage from "../../page_objects/AboutPage";

const aboutPage = new AboutPage();

Given("I open the Cubera homepage 1", () => {
  cy.log("🌐 Starting test...");
  cy.viewport(1366, 768);
  cy.visit("https://cubera.co/");
});

When("I navigate to the About page", () => {
  aboutPage.visit();
});

Then("I should see the trusted partner message", () => {
  aboutPage.verifyTrustedPartnerText();
});

Then("I should see the maximizing impact message", () => {
  aboutPage.verifyMaximizingImpactText();
});

Then("I should see the innovative minds message", () => {
  aboutPage.verifyInnovativeMindsText();
});

Then("I click the LinkedIn icon and return to About page", () => {
  aboutPage.clickLinkedInIcon();
});

Then("I verify the Partners and Ecosystem sections", () => {
  aboutPage.verifyPartnersSection();
  aboutPage.verifyEcosystemSection();
});

Then("I verify the Get in touch and final sections", () => {
  aboutPage.verifyGetInTouchSection();
  aboutPage.visitFinalSection();
});

afterEach(() => {
  cy.log("✅ Test completed.");
});

When("I hover over the About menu", () => {
  aboutPage.hoverOnAboutMenu();
});

When("I click the Management submenu", () => {
  aboutPage.clickManagementSubmenu();
});

Then("I verify all management social icons and navigate back", () => {
  aboutPage.verifyAllManagementSocials();
});

Then("I verify the career join section and click join button", () => {
  aboutPage.verifyCareerJoinSection();
});


