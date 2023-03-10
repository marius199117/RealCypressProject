Feature: Login
    Background:
        Given I am on the 'login' page

    Scenario: Succesfull login
        When I enter 'marius@test.com' data on 'email' field
        And I enter 'Marius@test.com!' data on 'password' field
        And I click the 'submitButton' button
        Then I verify the validation message "succesfullyLoggedIn"

