@ui
Feature: View Google Site
  In order to get search results
  As a user
  I want to view the Google site

  Scenario: Viewing search with results
    Given I navigate to google search page
    When I search for 'tests'
    Then the result has multiple results