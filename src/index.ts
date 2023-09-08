import express, { Application } from "express";
import "dotenv/config";
import { connectDB } from "./config/dbConfig";
import { mainRoutes } from "./routes/mainRouter";
import { mainConfig } from "./config/mainConfig";

const app: Application = express();
connectDB();
mainConfig(app);
mainRoutes(app);

const port = process.env.PORT;

app.listen(port, (): void => {
  console.log(`server running on ${port}`);
});
