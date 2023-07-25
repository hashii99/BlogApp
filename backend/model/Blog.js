import mongoose from "mongoose";

const Schema  = mongoose.Schema;

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User", 
        required: true,
        // because 1 blog is owned by one user
    },
});

export default mongoose.model("Blog", blogSchema);