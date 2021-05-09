import { Router } from "express";
import { example } from "../controllers/example.controller";

const router = Router();

router.get("/", example);

export default router;
