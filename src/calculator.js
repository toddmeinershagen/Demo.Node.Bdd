class Calculator {
    constructor(op1) {
        this._result = op1;
    }

    add(op2) {
        this._result += op2;
    }

    subtract(op2) {
        this._result -= op2;
    }

    get result() {
        return this._result;
    }
}

module.exports = Calculator;