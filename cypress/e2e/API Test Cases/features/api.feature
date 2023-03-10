Feature: Test API endpoint
    As a developer, I want to test the API endpoint
    So that I can ensure it is working correctly

    Scenario Outline: Test API endpoint with different request type
        Given the API 'https://jsonplaceholder.typicode.com' is available
        When I send a '<request_type>' request to the '<endpoint>' with body '<body>'
        Then the response should have a status code of '<status_code>'
        And the response should contain a matched '<applicationJson>' Json
        And verify response body '<responseBody>'


        Examples:
            | request_type |  | endpoint |  | body                                                            | status_code |  | applicationJson  |  | responseBody                                                       |
            | GET          |  | /todos/1 |  |                                                                 | 200         |  | application/json |  | {"userId":1,"id":1,"title":"delectus aut autem","completed":false} |
            | POST         |  | /posts   |  | {"userId":50,"id":101,"title":"testing123","body":"testing345"} | 201         |  | application/json |  | {"userId":50,"id":101,"title":"testing123","body":"testing345"}    |
            | PUT          |  | /posts/4 |  | {"title":"testing1","body":"testing2"}                          | 200         |  | application/json |  | {"id":4,"title":"testing1","body":"testing2"}                      |
            | PATCH        |  | /posts/2 |  | {"title":"testing12","body":"testing21"}                        | 200         |  | application/json |  | {"userId":1,"id":2,"title":"testing12","body":"testing21"}         |
            | DELETE       |  | /posts/1 |  |                                                                 | 200         |  | application/json |  | {}                                                                 |
