@PBI2753 @api
Feature: Typicode Posts

  This feature validates the posts feature of the Typicode API.

  Scenario Outline: Getting A Single Post
    Given an existing post with id of <id>
    When getting the post
    Then the post should have a title of '<title>'

    Examples:
      | id | title  |
      | 1  | Post 1 |
      | 2  | Post 2 |
      | 3  | Post 3 |