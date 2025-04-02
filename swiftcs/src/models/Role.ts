
import { Schema,model, models } from "mongoose";

const rolesModel = new Schema({
    name: String,
    permissions: [{type:Schema.Types.ObjectId, ref:'Permissions'}]
})

export default models.Roles || model('Roles', rolesModel);