const sum = require("./sum")
const subtraction = require("./subtraction");
const multiplication = require("./multiplication")
const division = require("./division")

class Factory {
    create(type, valueOne, valueTwo) {
        switch (type) {

            case '/sum':
                return new sum(valueOne, valueTwo);

            case '/subtraction':
                return new subtraction(valueOne, valueTwo);

            case '/multiplication':
                return new multiplication(valueOne, valueTwo);

            case '/division':
                return new division(valueOne, valueTwo);

            default: {
                console.log("operacion no dada")
            }
        }
    }
}

module.exports = new Factory;