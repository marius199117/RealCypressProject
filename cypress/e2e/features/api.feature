Feature: Test API endpoint
    As a developer, I want to test the API endpoint
    So that I can ensure it is working correctly

    Scenario Outline: Test API endpoint with different request type
        Given the API 'apiEndpoint' is available
        When I send a '<request_type>' request to the '<endpoint>' with id '<id>' with body '<body>'
        Then the response should have a status code of '<status_code>'
        And the response should contain a matched '<applicationJson>' Json
        And the '<responseBody>' should have a property '<property>' with value '<value>'

        Examples:
            | request_type |  | endpoint    |  | id |  | body                                               | status_code |  | applicationJson  |  | responseBody                |  | property |  | value         |
            | GET          |  | /api/users/ |  | 2  |  |                                                    | 200         |  | application/json |  | responseBodyData            |  | id       |  | 2             |
            | POST         |  | /api/users/ |  |    |  | {\"name\":\"marius\",\"job\":\"lead\"}             | 201         |  | application/json |  | responseBodyProperty        |  | name     |  | marius        |
            | PUT          |  | /api/users/ |  | 2  |  | {\"name\":\"marius\",\"job\":\"zion resident\"}    | 200         |  | application/json |  | responseBodyProperty        |  | job      |  | zion resident |
            | PATCH        |  | /api/users/ |  | 2  |  | {\"name\":\"marius123\",\"job\":\"zion resident\"} | 200         |  | application/json |  | responseBodyProperty        |  | name     |  | marius123     |
            | DELETE       |  | /api/users/ |  | 2  |  | {\"name\":\"marius123\",\"job\":\"zion resident\"} | 204         |  | undefined        |  | responseBodyWithoutProperty |  |          |  |               |