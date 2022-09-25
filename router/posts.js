import express from 'express'
import { createPost, deletePost, getPosts, updatePost } from '../controller/posts.js'

const router  = express.Router()
// get
router.get("/", getPosts)
router.post("/", createPost)
// post
router.post("/update", updatePost)
router.post("/delete", deletePost)

export default router