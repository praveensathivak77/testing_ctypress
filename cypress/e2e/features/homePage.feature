Feature: Cubera Homepage Navigation and Contact Form

  Scenario Outline: Submit contact form for multiple users
    Given I open the Cubera homepage
    When I choose "<navigationType>"
    And I go to the contact page
    And I fill out the contact form with "<firstName>" "<lastName>" "<email>" "<phone>" "<product>" "<message>"
    Then I should see the Calendly modal
    And I close the Calendly modal
    And I close the cookies popup
    And I return to the homepage by clicking the logo

  Examples:
    | navigationType      | firstName | lastName | email                   | phone      | product | message                                        |
    | navigate main menus | John      | Doe      | johndoe@example.com     | 9876543210 | Edge    | This is a test message from John.              |
    | skip menus directly | Alice     | Smith    | alice.smith@example.com | 9998887777 | Cube    | Inquiry about Cube platform automation testing.|
    | skip menus directly | Rahul     | Verma    | rahul.verma@example.com | 9123456789 | Hedwig  | Interested in Hedwig platform demo.            |

  Scenario: Submit contact form with invalid details and return home
    Given I open the Cubera homepage
    When I go to the contact page
    And I try all invalid form submissions
    Then I should be back on the homepage
