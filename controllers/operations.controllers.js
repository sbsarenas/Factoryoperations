const factory = require("../routes/factory.routes")
const { validationResult } = require("express-validator");


exports.sum = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("validation failed");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const op = factory.create("/sum", valueOne, valueTwo);
        const result = op.valueOne + op.valueTwo;
        res.status(201).json({ messege: "suma success.", data: { result } });
        console.log("Sum", op, "Result: ", op.valueOne + op.valueTwo)


    } catch (e) {
        const error = new Error("validation failed");
        error.statusCode = 500;
        error.data = errors.array();
        throw error;
    }

};


exports.subtraction = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("validation failed");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const op = factory.create("/subtraction", valueOne, valueTwo);
        const result = valueOne - valueTwo;
        res.status(201).json({ messege: "Substraction success.", data: { result } });
        console.log("Substraction", op, "Result : ", op.valueOne - op.valueTwo)


    } catch (e) {
        const error = new Error("validation failed");
        error.statusCode = 500;
        error.data = errors.array();
        throw error;
    }

};


exports.multiplication = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("validation failed");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const op = factory.create("/multiplication", valueOne, valueTwo);
        const result = valueOne * valueTwo;
        res.status(201).json({ messege: "multiplication success.", data: { result } });
        console.log("Multiplication", op, "Result : ", op.valueOne * op.valueTwo)


    } catch (e) {
        const error = new Error("validation failed");
        error.statusCode = 500;
        error.data = errors.array();
        throw error;
    }

};




exports.division = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("validation failed");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const op = factory.create("/division", valueOne, valueTwo);
        const result = valueOne / valueTwo;
        res.status(201).json({ messege: "divison success.", data: { result } });
        console.log("Division", op, "Result : ", op.valueOne / op.valueTwo)


    } catch (e) {
        const error = new Error("validation failed");
        error.statusCode = 500;
        error.data = errors.array();
        throw error;
    }

};

