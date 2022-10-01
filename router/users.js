import express from 'express'
import { createUser, findUser } from '../controller/posts.js'

const router  = express.Router()

router.post("/", createUser)
router.post("/find", findUser)

export default router