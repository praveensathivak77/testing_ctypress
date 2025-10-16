// cypress/e2e/step_definitions/InsightsSteps.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InsightsPage from "../../page_objects/InsightsPage";

const insightsPage = new InsightsPage();

Given("I open the Insights page directly", () => {
  insightsPage.openInsights();
});

When("I verify the Performance Marketing article is visible", () => {
  insightsPage.verifyPerformanceMarketingArticle();
});

When("I scroll through the Insights sections", () => {
  insightsPage.scrollThroughSections();
});

When("I click the Read More button", () => {
  insightsPage.clickReadMoreButton();
});

Then("I navigate within the article and perform assertions", () => {
  insightsPage.navigateInsideArticle();
});
