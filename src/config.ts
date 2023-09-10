export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  mode: "development",
  db: {
    host: process.env.DB_HOST || "localhost",
    type: "postgres",
    password: process.env.DB_PASSWORD || "password",
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID || "",
    clientSecret: process.env.PAYPAL_CLIENT_SECRET || "",
  },
};
