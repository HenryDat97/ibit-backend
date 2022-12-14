import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
            default: 'Anomyous',
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
)

export const PostModel = mongoose.model('Post', PostSchema)
