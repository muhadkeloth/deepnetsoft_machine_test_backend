import logger from "../middleware/logger";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


export default class MainController {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    menu = async (req: Request, res: Response) => {
        try {
            const { menu } = req.body;
            if (!menu) throw new Error("menu is required");

            const response = await this.prisma.menu.findMany({
                where: { category: menu },
                take:5,
            });

            res.status(200).json({ response });
        } catch (error) {
            const err = error as Error;
            logger.error(`Error finding menus: ${err.message}`);
            res.status(500).json({ error: err.message });
        }
    };

  

  }