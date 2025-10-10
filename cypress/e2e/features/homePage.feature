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
    And I view the Privacy Policy and return

  Scenario: Open Reach Out page and return to homepage
    Given I open the Cubera homepage
    When I click on the Reach Out button
    Then I should see the Reach Out page
    And I return to the homepage


   Scenario: Open Learn more and return to homepage
    Given I open the Cubera homepage
    When I click on the Learn more button
    Then I should see the We are a trusted partner page 
    And I return to the homepage of cubera


    Scenario: Scroll to carousel and navigate through all images
      Given I open the Cubera homepage
      When I scroll to the carousel section
      And I click the right arrow 3 times
      And I click the left arrow 3 times

    
    Scenario: Hover over AI Powered Reach cards in both directions
      Given I open the Cubera homepage
      When I scroll to the AI Powered Reach section
      And I hover over the AI Powered Reach cards from left to right
      And I hover back over the AI Powered Reach cards from right to left
      Then the AI Powered Reach section should remain visible
   
   Scenario: Navigate to services and return to Core Service Offerings
      Given I open the Cubera homepage
      When I scroll to the Core Service Offerings section
      And I click the Omnichannel Targeting
      Then I should see the Omnichannel Targeting page
      And I return to the Core Service Offerings section
      And I click the Identity Graph
      Then I should see the Identity Graph page
      And I return to the Core Service Offerings section
      And I click the AI Cohort Generation
      Then I should see the AI Cohort Generation page
      And I return to the Core Service Offerings section
      And I click the Ad Service
      Then I should see the Ad Service page
      And I return to the Core Service Offerings sections

    Scenario: Scroll to client testimonials
      Given I open the Cubera homepage
      When I scroll to the client testimonials section
      Then I should see the "What our clients say about us" heading
      And I click the carousel arrows twice each
   @only
   Scenario: Scroll to recent blogs and test blog navigation
      Given I open the Cubera homepage
      When I scroll to the recent blogs section
      Then I should see the "Find out more in our recent blogs" heading1

      # First blog
      And I click the image of the first blog
      Then I should see the "Cubera Cube Launches in India" blog page
      And I return to the homepage and blog

      # Second blog
      And I click the title link of the second blog
      Then I should see the "Cubera Unveils Edge & Hedwig inIndia, Ushering in a New Era of Data-Driven Advertising" blog page
      And I return to the homepage and blog

      # Third blog
      And I click the title link of the third blog
      Then I should see the "Omni Channel Advertising" blog page
      And I return to the homepage and blog





    



      



      
  