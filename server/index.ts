import express from "express";
import { ListenerPlugin, MiddlewarePlugin } from "./plugins";

const app = express();

MiddlewarePlugin.plug(app);
ListenerPlugin.plug(app);
