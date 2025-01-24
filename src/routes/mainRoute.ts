import { Router } from "express";
import MainController from "../controllers/MainController";
import MainRepository from "../repositories/MainRepository";
import Menu from "../models/Menu";


const router = Router();

const mainController = new MainController(new MainRepository(Menu));

router.post('/', mainController.menu);


export default router;