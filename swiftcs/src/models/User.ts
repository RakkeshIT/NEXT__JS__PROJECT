import { model, models, Schema } from 'mongoose';


const userModel = new Schema({
    name: String,
    email: {type: String, unique:true, required:true},
    password: {type: String, required:true},
    role:{type:Schema.Types.ObjectId, ref:'Role'}
})

export default models.User || model('User',userModel);