import { Router } from "express";
import MainController from "../controllers/MainController";
import { PrismaClient } from "@prisma/client";


const router = Router();
const prisma = new PrismaClient();
const mainController = new MainController(prisma)

router.post('/', mainController.menu);


export default router;