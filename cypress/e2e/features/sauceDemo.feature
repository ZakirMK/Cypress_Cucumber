Feature: Sauce Demo Tests

Scenario: Check home page
  Given I visit the Sauce Demo page
  When I log in
  Then I should see the home page