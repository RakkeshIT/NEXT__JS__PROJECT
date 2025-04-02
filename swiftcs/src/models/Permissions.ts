
import { Schema, models, model } from "mongoose";

const permissionsModel = new Schema({
    name: {type:String, unique:true, required: true},
})

export default models.Permissions || model('Permissions', permissionsModel);