'use strict';

import express from 'express';
const router = express.Router();
import team from '../models/team/js';
import auth from './middleware.js';


router.get('/api/v1/team', auth, (req, res, next) => {
  Teams.findOne({})
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.get('/api/v1/teams/:id', auth, (req, res, next) => {
  Teams.findOne({_id: req.params.id})
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.put('/api/v1/:teams/:id', (req, res, next) => {

  req.model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(model => sendJSON(res, model))
    .catch(next);

});

router.delete('/api/v1/:teams/:id', auth, (req, res, next) => {

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
