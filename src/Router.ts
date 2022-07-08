import { UserRoutes } from "./user/UserRoutes"
import express from "express"
import { PostRoutes } from "./posts/PostRoutes"
import { PrismaClient } from "@prisma/client"

export class Router {
    public static newRouter(connection: PrismaClient) {
        const router = express.Router()

        const userRoutes = UserRoutes.newUserRoutes(connection)
        router.use(userRoutes)

        const postRoutes = PostRoutes.newPostRoutes(connection)
        router.use(postRoutes)

        return router
    }
}