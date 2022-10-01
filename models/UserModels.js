import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        gmail: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String
        }
    },
    {timestamps: true}
)

export const UserModel = mongoose.model('User', UserSchema)