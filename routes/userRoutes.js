const express = require("express");
const routes = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
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

routes.post("/register", (req, res) => {
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
    res
      .status(400)
      .json({ message: "Include a username, password and department" });
  }
});

function makeTokenFromId(id) {
  const payload = {
    subject: id
  };
  const options = {
    expiresIn: "1h"
  };
  const token = jwt.sign(payload, "secret", options);
  return token;
}

routes.post("/login", (req, res) => {
  let { username, password } = req.body;
  if (username && password) {
    db("users")
      .where({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = makeTokenFromId(user.id);
          res.status(200).json({
            token
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      });
  } else {
    res.status(401).json({ message: "Username and password required" });
  }
});

routes.get("/api/users", (req, res) => {});

module.exports = routes;
