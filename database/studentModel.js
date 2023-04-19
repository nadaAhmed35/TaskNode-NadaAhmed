import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String ,
        required: true,
    },

    city: {
        type: String ,
        required: false,
    }
});

export default model('Nada', studentSchema);
