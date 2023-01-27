Feature: Test API endpoint
    As a developer, I want to test the API endpoint
    So that I can ensure it is working correctly

    Scenario Outline: Test API endpoint with different request type
        Given the API 'apiEndpoint' is available
        When I send a "<request_type>" request to the "<endpoint>" with id "<id>" with body "<body>"
        Then the response should have a status code of "<status_code>"
        And the response should contain a matched "<applicationJson>" JSON


        Examples:
            | request_type |  | endpoint    | id |  | body_name_job | status_code |  | applicationJson                 |
            | GET          |  | /api/users/ | 2  |  |               | 200         |  | application/json; charset=utf-8 |
            | POST         |  | /api/users/ |    |  | body_name_job | 201         |  | application/json; charset=utf-8 |
            | PUT          |  | /api/users/ | 2  |  | body_name_job | 200         |  | application/json; charset=utf-8 |
            | PATCH        |  | /api/users/ | 2  |  | body_name_job | 200         |  | application/json; charset=utf-8 |
            | DELETE       |  | /api/users/ | 2  |  |               | 204         |  | undefined                       |