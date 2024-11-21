Feature: Sauce Demo Tests

  Scenario: Check home page
    Given I visit the Sauce Demo page
    When I log in
    Then I should see the home page

  Scenario: Check home page products
    Given I visit the Sauce Demo page
    When I log in
    Then I should see the home page products and their prices

  Scenario: Check add to cart process
    Given I visit the Sauce Demo page
    When I log in
    # select a number between 1 and 6 due to the number of items in the inventory
    And I add product 1 to the cart 
    Then The cart should show the correct product 1 details

  Scenario: Check ordering item process
    Given I visit the Sauce Demo page
    When I log in
    # select a number between 1 and 6 due to the number of items in the inventory
    And I order product 2
    Then The order should be successfully completed

  Scenario: Mock SauceDemo token
    Given I visit the Sauce Demo page
    When I mock the "uniqueTokenEventAlias" event
    And I mock the "summedTokenEventAlias" event
    Then The events should be successfully mocked
    And The test should fail intentionally for verification