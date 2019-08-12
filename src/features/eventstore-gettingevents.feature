@api
Feature: Getting Events from Event Store
  As a developer
  I want to see a list of unique event types
  So that I can determine if I need to create a new even type or use an existing one
  
  Scenario: Getting list of event types
    Given a valid subscription key
    And event types exist
    When I get a list of event types
    Then the result has multiple event types