const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Import userControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const validateUser = require("./validators/validateUser");

// Route to get a list of items
/*
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/user/:id", userControllers.read);
*/

// Route to add a new item
router.post("/user", validateUser, userControllers.add);

/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const profilControllers = require("./controllers/profilControllers");
const validateProfil = require("./validators/validateProfil");

// Route to get a list of items

// Route to add a new item
router.post("/profil", validateProfil, profilControllers.add);

/* ************************************************************************* */
/* *******************terminal****************************************************** */

const terminalControllers = require("./controllers/terminalControllers");

router.get("/terminals", terminalControllers.browse);
router.get("/terminals/:id", terminalControllers.read);

/* ***************************Profil********************************************** */

router.get("/profils", profilControllers.browse);
router.get("/profils/one", profilControllers.read);
router.put("/profils/:id", profilControllers.edit);

/* ***************************CAR********************************************** */
const carControllers = require("./controllers/carControllers");

router.get("/cars", carControllers.browse);
router.get("/cars/:id", carControllers.read);
router.put("/cars/:id", carControllers.edit);

/* ************************************************************************* */

/* ************************************************************************* */

module.exports = router;
