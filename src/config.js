import "dotenv/config";

export const config = {
  apiId: Number(process.env.API_ID),
  apiHash: process.env.API_HASH,
  sessionName: process.env.SESSION_NAME,
};
