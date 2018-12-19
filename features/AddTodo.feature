Feature: Todo list

  Scenario: Add todos to a list
    Given I open the page
    When I type "Eggs" in the box
    And I click the Add button
    Then I should see "Eggs" in the list
