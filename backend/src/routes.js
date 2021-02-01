const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const StoreController = require("./controllers/StoreController");

routes
  // Users
  .get("/users", UserController.getUsers)
  .get("/users/:id", UserController.getUsersId)
  .post("/users", UserController.createUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser)
  // Store
  .get("/store", StoreController.getStoreJoin)
  .post("/store", StoreController.createStore)
  .put("/store/:id", StoreController.updateStore)
  .delete("/store/:id", StoreController.removeStore);
module.exports = routes;
