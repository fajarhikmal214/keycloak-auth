import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import Keycloak from 'keycloak-connect';
import jwt_decode from 'jwt-decode';

import { keycloakConfig } from './config/keycloak-config';
import * as receivers from './services/receivers';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  }),
);

const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

app.use(keycloak.middleware());

app.get('/', (_req, res) => {
  res.send('Hello Sidebar API!');
});

app.get('/receivers', keycloak.protect('e-office'), (_req, res) => {
  try {
    res.json(receivers.getAll());
  } catch (error) {
    res.send('Unauthorized');
  }
});

app.get('/esign/receivers', keycloak.protect(), async (req, res) => {
  try {
    const { headers } = req;
    const token: any = headers.authorization!.split(' ').pop();
    const decoded: any = await jwt_decode(token);

    res.json(receivers.getByRoleCode(decoded.rolecode, decoded.peopleid));
  } catch (error) {
    res.send('Unauthorized');
  }
});

app.listen(PORT, () => {
  console.log(`Sidebar API App listening on port ${PORT}`);
});
