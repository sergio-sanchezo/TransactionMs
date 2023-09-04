export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  mode: process.env.NODE_ENV || "development",
  db: {
    type: process.env.DB_TYPE || "postgres",
  },
};
