Feature: Insights Page Deep Navigation
  As a user
  I want to explore the Insights page and navigate articles
  So that I can confirm all related pages and sections are accessible

  Scenario: Full interaction through Insights and article navigation
    Given I open the Insights page directly
    When I verify the Performance Marketing article is visible
    And I scroll through the Insights sections
    And I click the Read More button
    Then I navigate within the article and perform assertions
