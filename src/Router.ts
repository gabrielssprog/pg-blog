import { UserRoutes } from "./user/UserRoutes"
import express from "express"
import { PostRoutes } from "./posts/PostRoutes"

export class Router {
    public static newRouter() {
        const router = express.Router()

        const userRoutes = UserRoutes.newUserRoutes()
        router.use(userRoutes)

        const postRoutes = PostRoutes.newPostRoutes()
        router.use(postRoutes)

        return router
    }
}