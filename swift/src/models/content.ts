import mongoose, {Schema, model, models} from "mongoose";

const contentShema = new Schema({
    title: {
        type:String,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const ContentModel = models.Content || model('Content', contentShema)

export default ContentModel;