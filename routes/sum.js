const constructor = require("../routes/constructor");


class Sum {
    constructor(valueOne, valueTwo) {
        return new constructor(valueOne, valueTwo);

    }
}

module.exports = Sum;