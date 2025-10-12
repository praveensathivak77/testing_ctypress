Feature: Validate Omnichannel Targeting and Identity Graph page flow

  Scenario: Verify Omnichannel Targeting page functionality
    Given I open the Cubera homepage and Our Solution
    When I hover over the Our Solutions menu
    And I click the Omnichannel Targeting menu item
    Then I should see the "Omnichannel Targeting"
    When I click the Reachout
    Then I should see "Get in touch with us"
    And I go back to the Omnichannel Targeting page
    Then I slowly scroll and validate Omnichannel content
@only 
  Scenario: Verify Identity Graph page functionality
    Given I open the Cubera homepage and Our Solution
    When I hover over the Our Solutions menu
    And I click the Identity Graph menu item
    Then I should see the "Identity Graph"
    Then I slowly scroll and validate Identity Graph content
