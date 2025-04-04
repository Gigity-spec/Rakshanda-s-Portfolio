import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistSchema, contactSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle waitlist form submissions
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = waitlistSchema.parse(req.body);
      
      // Store the waitlist entry
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

  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(data);
      
      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: message.id
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
        console.error("Error in contact form submission:", error);
        res.status(500).json({
          success: false,
          message: "Server error processing your request"
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
