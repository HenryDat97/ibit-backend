import { PostModel } from '../models/PostModels.js'
import { UserModel } from '../models/UserModels.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ errors: err })
    }
}

export const createPost = async (req, res) => {
    try {
        // Request body
        const newPost = req.body
        // Create post
        const post = await new PostModel(newPost)
        // Save post
        await post.save()
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ errors: err })
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body
        const filter = { _id: updatePost._id }

        const post = await PostModel.findOneAndUpdate(filter, updatePost, {
            new: true,
            returnOriginal: false,
        })

        res.status(200).json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json({ errors: err })
    }
}

export const deletePost = async (req, res) => {
    try {
        const deletePost = req.body
        const filter = { _id: deletePost._id }
        const post = await PostModel.findOneAndDelete(filter)

        res.status(200).json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json({ errors: err })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await PostModel.find()
        res.status(200).json(users)
    } catch(err) {
        console.log(err)
        res.status(500).json({ errors: err })
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = req.body
        const user = await new UserModel(newUser)

        console.log(req.body)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({ errors: err })
    }
}
