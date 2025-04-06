import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistSchema, contactSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import path from "path";
import { Router } from 'express';

const apiRouter = Router();

apiRouter.post('/contact', async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);
    const contactMessage = await storage.createContactMessage(data);

    res.json({ success: true, message: "Message sent successfully", id: message.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationError = fromZodError(error);
      res.status(400).json({ success: false, message: "Validation error", errors: validationError.message });
    } else {
      console.error("Error in contact form submission:", error);
      res.status(500).json({ success: false, message: "Server error processing your request" });
    }
  }
});

apiRouter.post("/waitlist", async (req, res) => {
    try {
      const data = waitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      res.status(201).json({
        success: true,
        message: "Successfully added to waitlist",
        id: entry.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error in waitlist submission:", error);
        res.status(500).json({
          success: false,
          message: "Server error processing your request"
        });
      }
    }
  });


export async function registerRoutes(app: Express): Promise<Server> {
  // Serve PDF files directly
  app.get('/documents/:filename', (req: Request, res: Response) => {
    const filename = req.params.filename;
    const filePath = path.join(process.cwd(), 'public', 'documents', filename);
    res.sendFile(filePath);
  });
  app.use('/api', apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}