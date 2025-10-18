Feature: About Page Validation

  Scenario: Verify About page content sections and interactions
    Given I open the Cubera homepage 1
    When I navigate to the About page
    Then I should see the trusted partner message
    And I should see the maximizing impact message
    And I should see the innovative minds message
    And I click the LinkedIn icon and return to About page
    And I verify the Partners and Ecosystem sections
    And I verify the Get in touch and final sections


  Scenario: Verify Management team social links and career section
    Given I open the Cubera homepage
    When I hover over the About menu
    And I click the Management submenu
    Then I verify all management social icons and navigate back
    And I verify the career join section and click join button