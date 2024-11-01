import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Title Required!"],
    },
    desc: {
        type: String,
        trim: true,
    },
    featuredImg: {
        type: String,
    }
})

export default mongoose?.models?.blog || 
mongoose.model("blog", blogSchema)