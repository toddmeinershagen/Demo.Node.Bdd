@ui
Feature: View Google Site
  As a user
  I want to search terms on google
  In order to get search results
  
  Scenario: Viewing Search with Results
    Given I navigate to google search page
    When I search for 'tests'
    Then the result has multiple results