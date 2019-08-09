@PBI2752
Feature: Subtraction

  This feature validates how a calculator should subtract numbers.

  Scenario Outline: Subtracting Numbers
    Given an initial number of <op1>
    When I subtract another number <op2>
    Then the result should be <diff>

    Examples:
      | op1 | op2 | diff |
      | 1   | 1   | 0    |
      | 2   | 0   | 2    |
      | 3   | -4  | 7    |