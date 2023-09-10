export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  mode: process.env.NODE_ENV || "development",
  db: {
    type: process.env.DB_TYPE || "postgres",
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID || "",
    clientSecret: process.env.PAYPAL_CLIENT_SECRET || "",
  },
};
