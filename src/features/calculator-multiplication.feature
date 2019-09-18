@PBI2752 @smoke
Feature: Multiplication

  This feature validates how a calculator should multiply numbers.

  Scenario Outline: Multiplying Numbers
    Given an initial number of <op1>
    When I multiply another number <op2>
    Then the result should be <product>

    Examples:
      | op1 | op2 | product |
      | 1   | 1   | 1       |
      | 2   | 0   | 0       |
      | 3   | -4  | -12     |