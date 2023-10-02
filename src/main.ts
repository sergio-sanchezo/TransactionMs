import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import express, { Request, Response } from "express";
import morgan from "morgan";
import { config } from "./config";
import cors from "cors";
import { dbInit } from "./database/database";
import transactionRouter from "./transaction/infrastructure/route/transaction.route";
import path from "path";

function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(morgan(config.mode === "production" ? "combined" : "dev"));
  app.use(express.static(path.join(__dirname, "public")));

  // Health check
  app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK");
  });

  const { port } = config.server;

  app.use("/transactions-api", transactionRouter);

  dbInit().then();

  app.listen(port, () => {
    console.log(`[APP] Server is running on http://localhost:${port}`);
    console.log(`[APP] Mode: ${config.mode}`);
  });
}

bootstrap();
