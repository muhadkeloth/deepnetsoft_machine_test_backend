import mongoose, { Document, Schema } from "mongoose";

export interface IMenu extends Document {
    name:string;
    price:number;
    category:string;
    description:string;
}


const MenuSchema:Schema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
})

const Menu = mongoose.model<IMenu>('Menu', MenuSchema);
export default Menu;