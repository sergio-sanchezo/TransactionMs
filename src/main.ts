import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import express, { Request, Response } from "express";
import morgan from "morgan";
import { config } from "./config";
import cors from "cors";
import transactionRoute from "./infraestructure/route/transaction.route";
import { dbInit } from "./infraestructure/database/database";

function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(morgan(config.mode === "production" ? "combined" : "dev"));

  // Health check
  app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK");
  });

  const { port } = config.server;

  app.use("/transaction", transactionRoute);

  dbInit().then();

  app.listen(port, () => {
    console.log(`[APP] Server is running on http://localhost:${port}`);
    console.log(`[APP] Mode: ${config.mode}`);
  });
}

bootstrap();
