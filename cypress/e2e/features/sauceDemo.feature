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
    And I add product 1 to the cart
    Then the cart should show the correct product 1 details