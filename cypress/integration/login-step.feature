Feature: Login


Scenario: Succesfull login
    Given I am on the login page 
    When I enter 'marius@test.com' data on 'email' field
    And I enter 'Marius@test.com!' data on 'password' field
    And I click the 'submitButton' button
    Then I verify the validation message "succesfullyLoggedIn"

Scenario: Invalid username and password login
    Given I am on the login page 
    When I enter 'test' data on "email" field
    And I enter 'test' data on 'password' field
    And I click the 'submitButton' button
    Then I verify the validation message "invalidLoginCredentials"

Scenario: Empty field for username and password login
    Given I am on the login page 
    When I click the 'submitButton' button
    Then I verify the validation message "invalidUsernamePasswordMessage"






