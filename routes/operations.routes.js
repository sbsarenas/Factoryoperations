const express = require("express");
const { body } = require("express-validator");
const Route = express.Router();
const operationsController = require("../controllers/operations.controllers")

Route.post(
    "/sum",
    [
        body("valueOne")
            .exists()
            .withMessage("El valueOne es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueOne debe ser numerico")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valueTwo es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueTwo debe ser numerico")
            .trim()
            .escape(),

    ],
    operationsController.sum
);

Route.post(
    "/subtraction",
    [
        body("valueOne")
            .exists()
            .withMessage("El valueOne es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueOne debe ser numerico")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valueTwo es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueTwo debe ser numerico")
            .trim()
            .escape(),

    ],
    operationsController.subtraction
);

Route.post(
    "/multiplication",
    [
        body("valueOne")
            .exists()
            .withMessage("El valueOne es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueOne debe ser numerico")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valueTwo es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueTwo debe ser numerico")
            .trim()
            .escape(),

    ],
    operationsController.multiplication
);

Route.post(
    "/division",
    [
        body("valueOne")
            .exists()
            .withMessage("El valueOne es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueOne debe ser numerico")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valueTwo es requerido")
            .matches(/[0-9]+$/)
            .withMessage("El valueTwo debe ser numerico")
            .trim()
            .escape(),

    ],
    operationsController.division
);


module.exports = Route;


