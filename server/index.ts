import express from "express";
import { ListenerPlugin, MiddlewarePlugin, RouterPlugin } from "./plugins";

const app = express();

MiddlewarePlugin.plug(app);
ListenerPlugin.plug(app);
RouterPlugin.plug(app);
