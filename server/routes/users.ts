import express from "express";
const router = express.Router();
import { Request, Response, NextFunction } from "express";
import { Pool } from "pg";

module.exports = (pool: Pool) => {
  /* GET all users */
  router.get("/", async (req: Request, res: Response) => {
    res.status(200).send("Working");
  });

  return router;
};
