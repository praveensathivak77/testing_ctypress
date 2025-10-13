Feature: Validate "Our Platforms" main menu and platform pages on Cubera website

  # -----------------------------------------------------------
  # Scenario 1 - Verify hover functionality
  # -----------------------------------------------------------
  Scenario: Hover over the Our Platforms menu to display submenus
    Given I open the Cubera homepage and Our Platforms
    When I hover over the Our Platforms menu
    Then I should see the list of submenus under Our Platforms


  # -----------------------------------------------------------
  # Scenario 2 - Cube Platform
  # -----------------------------------------------------------
  Scenario: Verify Cube platform page content and interactions
    Given I open the Cubera homepage and Our Platforms
    When I hover over the Our Platforms menu
    And I click the Cube submenu
    Then I should validate all Cube page sections and interactions


  # -----------------------------------------------------------
  # Scenario 3 - Cubera Identity Graph
  # -----------------------------------------------------------
  Scenario: Verify Cubera Identity Graph platform page content and interactions
    Given I open the Cubera homepage and Our Platforms
    When I hover over the Our Platforms menu
    And I click the Cubera Identity Graph submenu
    Then I should validate all Cubera Identity Graph page sections and interactions

  # -----------------------------------------------------------
  # Scenario 4 - Edge Platform
  # -----------------------------------------------------------
  Scenario: Verify Edge platform page content and interactions
    Given I open the Cubera homepage and Our Platforms
    When I hover over the Our Platforms menu
    And I click the Edge submenu
    Then I should validate all Edge page sections and interactions


  # -----------------------------------------------------------
  # Scenario 4 - Vertex
  # -----------------------------------------------------------

   Scenario: Validate all Vertex page sections and interactions
    Given I open the Cubera homepage and Our Platforms
    When I hover over the Our Platforms menu
    And I click the Vertex submenu
    Then I should validate all Vertex page sections and interactions

