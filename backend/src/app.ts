import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json'
import { RegisterRoutes } from "./routes/routes";

export const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function(req, res){
  res.send('Welcome to the backend API')
});

RegisterRoutes(app);
