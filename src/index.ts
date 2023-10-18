import "reflect-metadata";
import express from "express";
import { Server } from "./config/express/ExpressConfig";
import { appDataSource } from "./config/typeorm/config";

appDataSource.initialize();
const app = express();
const server = new Server(app);
server.init();