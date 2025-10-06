import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../page_objects/HomePage";
import "cypress-real-events";

const homePage = new HomePage();

Given("I open the Cubera homepage", () => {
  cy.viewport(1366, 768);
  cy.clearCookies();
  cy.clearLocalStorage();
  homePage.visit();
});

When("I choose {string}", (navigationType) => {
  if (navigationType === "navigate main menus") {
    const menus = ["Our Solutions", "Our Platforms", "Insights", "Academy"];
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
