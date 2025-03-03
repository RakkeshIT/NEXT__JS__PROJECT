import {Schema, models, model} from "mongoose";

const homeText = new Schema({
    text: {
        type: String,
    },
})

const createHomeModel = models.HomeText || model('HomeText', homeText);

export default createHomeModel;