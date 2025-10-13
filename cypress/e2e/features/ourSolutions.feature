Feature: Validate all pages and sections under "Our Solutions" on Cubera website

  Background:
    Given I open the Cubera homepage and Our Solution
    When I hover over the Our Solutions menu

  Scenario: Validate Omnichannel Targeting page content
    When I click the Omnichannel Targeting menu item
    Then I should see the solution section "Omnichannel Targeting"
    And I slowly scroll and validate Omnichannel content
    And I go back to the Our Solutions page

  Scenario: Validate Identity Graph page content
    When I click the Identity Graph menu item
    Then I should see the solution section "Identity Graph"
    And I slowly scroll and validate Identity Graph content
    And I go back to the Our Solutions page

  Scenario: Validate AI Cohort Generation page content
    When I click the AI Cohort Generation menu item
    Then I should see the solution section "AI Cohort Generation"
    And I slowly scroll and validate AI Cohort Generation content
    And I go back to the Our Solutions page

  Scenario: Validate Ad Service page content
    When I click the Ad Service menu item
    Then I should see the solution section "Ad Service"
    And I slowly scroll and validate Ad Service content
    And I go back to the Our Solutions page

  Scenario: Validate For Publishers page content
    When I click the For Publishers menu item
    Then I should see the solution section "For Publishers"
    And I slowly scroll and validate For Publishers content
    And I go back to the Our Solutions page

