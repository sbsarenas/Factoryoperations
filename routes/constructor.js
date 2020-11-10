class Operation {
    constructor(
        valueOne = 0,
        valueTwo = 0
    ) {
        this.valueOne = valueOne;
        this.valueTwo = valueTwo;
    }

    getvalueOne() {
        console.log(this.valueOne);
    }

    getvalueTwo() {
        console.log(this.valueTwo)
    }
}

module.exports = Operation;