import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OurPlatformsPage from "../../page_objects/OurPlatformsPage";

const ourPlatformsPage = new OurPlatformsPage();

// 🔹 Common setup
Given("I open the Cubera homepage and Our Platforms", () => {
  cy.viewport(1366, 768);
  cy.visit("https://cubera.co/");
  cy.wait(2000);
});

// 🔹 Hover & submenu visibility
When("I hover over the Our Platforms menu", () => {
  ourPlatformsPage.hoverOnOurPlatformsMenu();
});

Then("I should see the list of submenus under Our Platforms", () => {
  ourPlatformsPage.verifySubmenuItems();
});

// 🔹 Cube
When("I click the Cube submenu", () => {
  ourPlatformsPage.clickCube();
});

Then("I should validate all Cube page sections and interactions", () => {
  ourPlatformsPage.validateCubeSections();
});

// 🔹 Identity Graph
When("I click the Cubera Identity Graph submenu", () => {
  ourPlatformsPage.clickIdentityGraph();
});

Then("I should validate all Cubera Identity Graph page sections and interactions", () => {
  ourPlatformsPage.validateIdentityGraphSections();
});

// 🔹 Edge
When("I click the Edge submenu", () => {
  ourPlatformsPage.clickEdge();
});

Then("I should validate all Edge page sections and interactions", () => {
  ourPlatformsPage.validateEdgeSections();
});

When("I click the Vertex submenu", () => {
  // make sure this method exists in your class:
  // clickVertex() { cy.contains("a", "Vertex").click({force:true}) }
  ourPlatformsPage.clickVertex();
  cy.url({ timeout: 10000 }).should("include", "/vertex");
});

Then("I should validate all Vertex page sections and interactions", () => {
  ourPlatformsPage.validateVertexSections();
})