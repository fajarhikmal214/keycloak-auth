import 'dotenv/config';

import express from 'express';
import axios from 'axios';
import { getToken } from './services/keycloak';

const app = express();
const PORT = process.env.PORT ?? 4000;

const sidebarApiUrl = process.env.SIDEBAR_API_URL;

const sidebarApiInstance = axios.create({
  baseURL: sidebarApiUrl,
});

const setAuthorizationHeader = (token: any) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

app.get('/', (_req, res) => {
  res.send('Hello Sumedang App!');
});

app.get('/receivers', async (_req, res) => {
  try {
    const token = await getToken();

    const receivers = await sidebarApiInstance.get(
      '/receivers',
      setAuthorizationHeader(token),
    );

    res.json(receivers.data);
  } catch (error: any) {
    res.json(error);
  }
});

app.get('/esign/receivers', async (_req, res) => {
  try {
    const token = await getToken();

    const receivers = await sidebarApiInstance.get(
      '/esign/receivers',
      setAuthorizationHeader(token),
    );

    res.json(receivers.data);
  } catch (error: any) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Sumedang App listening on port ${PORT}`);
});
