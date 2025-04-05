import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());

// Register API routes
registerRoutes(app);

// Setup Vite for development
if (process.env.NODE_ENV === "development") {
  setupVite(app);
} else {
  serveStatic(app);
}

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
});


app.listen(5000, '0.0.0.0', () => {
  log("serving on port 5000");
});