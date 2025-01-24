import { Document, Model } from "mongoose";
import Menu from "../models/Menu";


export default class MainRepository<T extends Document> {

    constructor(protected model: Model<T>) {}

    async findbyCategory(menu:string): Promise<T[] | null> {
        return await this.model.find({category:menu})
    }
    

}