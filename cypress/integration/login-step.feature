Feature: Login

Scenario : Succesfull login
    Given I am on the login page 
    When I enter my email as 'marius@test.com' on 'email' field
    And I enter my email as 'Marius@test.com!' on 'password' field
    And I click the 'submitButton' button
    Then I verify the validation message "succesfullyLoggedIn"

Scenario: Invalid username and password login
    Given I am on the login page 
    When I enter my email as 'test' on "email" field
    And I enter my email as 'test' on 'password' field
    And I click the 'submitButton' button
    Then I verify the validation message "invalidLoginCredentials"

Scenario: Empty field for username and password login
    Given I am on the login page 
    When I click the 'submitButton' button
    Then I verify the validation message "invalidUsernamePasswordMessage"






