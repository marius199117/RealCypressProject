Feature: Test API
  As a user
  I want to test the API
  So that I can ensure it is working correctly

Scenario Outline: Test API call with different methods
  Given I have a <method> endpoint "<endpoint>"
  And the endpoint has a query parameter "<param>" with value "<value>"
  When I send a <method> request to the endpoint
  Then the response should have a status code of <status>

Examples:
  | method | endpoint         | param | value | status |
  | GET    | /api/users       | id    | 1     | 200    |
  | POST   | /api/users       | name  | John  | 201    |
  | PUT    | /api/users/{id}  | name  | Doe   | 200    |
  | DELETE | /api/users/{id}  |       |       | 204    |
  | PATCH  | /api/users/{id}  | name  | Doe   | 200    |