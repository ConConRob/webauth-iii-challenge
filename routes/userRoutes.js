const express = require("express");
const routes = express.Router();
const bcrypt = require("bcryptjs");
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

routes.use(express.json());
/*
 * @api {post} /api/register Reqister a user
 * @apiName Register
 * @apiGroup user
 *
 * @apiParam {String} username Username of the user.
 * @apiParam {String} password Password of the user.
 *
 * @apiSuccess {String} message Success message.
 *
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 201 OK
 * {
 *   "message": "Created a user"
 * }
 *
 * @apiError usernameTaken The username is already taken.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400
 *     {
 *       "error": "usernameTaken"
 *     }
 */

routes.post("/", (req, res) => {
  let { username, password, department } = req.body;
  if (username && password && department) {
    password = bcrypt.hashSync(password, 10);
    db("users")
      .insert({ username, password, department })
      .then(id => {
        res.status(201).json({ message: "Successfully created a user" });
      })
      .catch(error => {
        res.status(400).json({ error, message: "Username already taken" });
      });
  } else {
    res.status(400).json({ message: "Include a username, password and department" });
  }
});

routes.post("/api/login", (req, res) => {});

routes.get("/api/users", (req, res) => {});

module.exports = routes;
