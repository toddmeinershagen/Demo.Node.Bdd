Feature: Addition
  In order to get the sum
  As a user
  I want to add two numbers

  Scenario Outline: Adding Numbers
    Given an initial number of <op1>
    When I add another number <op2>
    Then the result should be <sum>

    Examples:
      | op1 |  op2 | sum  |
      | 100 |    1 | 101  |
      |  99 | 1234 | 1333 |
      |  12 |    5 |   17 |