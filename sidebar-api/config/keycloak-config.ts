import 'dotenv/config';

export const keycloakConfig: any = {
  clientId: process.env.CLIENT_ID,
  bearerOnly: true,
  serverUrl: process.env.AUTH_URL,
  realm: process.env.REALM_ID,
  realmPublicKey: process.env.PUBLIC_KEY,
};
