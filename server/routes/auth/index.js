import { Router } from 'express';
import db from '../../database';

const routes = new Router();

routes
  .post('/test', (req, res) => {
    console.log(req.body);
    res.send("TEST");
  })


module.exports = routes;
