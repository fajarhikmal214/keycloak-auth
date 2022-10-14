import 'dotenv/config';

import axios from 'axios';

const realmId = process.env.REALM_ID;

const keycloackAuthUrl = process.env.AUTH_URL;
const getTokenUrl = `/realms/${realmId}/protocol/openid-connect/token`;

const keycloakAuthInstance = axios.create({
  baseURL: keycloackAuthUrl,
});

const getTokenData = new URLSearchParams();
getTokenData.append('grant_type', process.env.GRANT_TYPE!);
getTokenData.append('client_id', process.env.CLIENT_ID!);
getTokenData.append('client_secret', process.env.CLIENT_SECRET!);

export const getToken = async () => {
  const result = await keycloakAuthInstance.post(getTokenUrl, getTokenData);

  return result.data.access_token;
};
