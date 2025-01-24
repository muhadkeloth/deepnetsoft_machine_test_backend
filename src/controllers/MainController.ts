import { Document } from "mongoose";
import MainRepository from "../repositories/MainRepository";
import logger from "../middleware/logger";
import { Request, Response } from "express";



export default class MainController<T extends Document> {
    constructor(protected repository: MainRepository<T>) {}

    menu = async (req: Request, res: Response) => {
        try {
            const { menu } = req.body;
            if(!menu) throw new Error('menu is required');
            const response = await this.repository.findbyCategory(menu);
            res.status(200).json({ response });
        } catch (error) {
            const err = error as Error;
            logger.error(`error to find menus: ${err.message}`)
            res.status(500).json({ error });
        }
    } 
  

  }