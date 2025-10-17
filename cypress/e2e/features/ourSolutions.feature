Feature: Validate all pages and sections under "Our Solutions" on Cubera website

  Background:
    Given I open the Cubera homepage our solutions
    When I hover over the Our Solutions menu

  Scenario: Validate Omnichannel Targeting page content
    When I click the Omnichannel Targeting menu item
    Then I validate Omnichannel sections

  Scenario: Validate Identity Graph page content
    When I click the Identity Graph menu item
    Then I validate Identity Graph sections

  Scenario: Validate AI Cohort Generation page content
    When I click the AI Cohort Generation menu item
    Then I validate AI Cohort sections

  Scenario: Validate Ad Service page content
    When I click the Ad Service menu item
    Then I validate Ad Service sections

  Scenario: Validate For Publishers page content
    When I click the For Publishers menu item
    Then I validate For Publishers sections
