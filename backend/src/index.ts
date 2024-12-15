import express from "express";
import http from "http";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";

import { PORT } from "./constants/port";

const app = express();

app.use(
	cors({
		credentials: true,
	})
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log("Server listening on port:", PORT);
});
