'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( user => res.send(user.generateToken()) )
    .catch(next);
});

authRouter.get('/signin',auth, (req, res, next) => { // eslint-disable-line
  res.cookie('Token', req.token);
  res.send(req.token);
});

authRouter.get('/api/v1/users', (req, res, next) => {
  User.findOne({})
    .then(data => sendJSON(res, data))
    .catch(next);
});

authRouter.get('/api/v1/users/:id', (req, res, next) => {
  User.findOne({_id: req.params.id})
    .then(data => sendJSON(res, data))
    .catch(next);
});

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'applicationjson');
  res.write(JSON.stringify(data));
  res.end();
};

export default authRouter;
