'use strict';

import express from 'express';
const router = express.Router();
import Team from '../models/teams.js';
import auth from '../auth/middleware.js';


router.get('/api/v1/teams', (req, res, next) => {
  Team.find({})
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.get('/api/v1/teams/:id', (req, res, next) => {
  Team.findOne({_id: req.params.id})
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.put('/api/v1/:teams/:id', (req, res, next) => {

  req.model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(model => sendJSON(res, model))
    .catch(next);

});

router.delete('/api/v1/:teams/:id', (req, res, next) => {

  req.model.findByIdAndDelete(req.params.id)
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

export default router;
