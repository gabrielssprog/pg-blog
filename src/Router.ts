import { UserRoutes } from "./user/UserRoutes"
import express from "express"
import { PostRoutes } from "./post/PostRoutes"
import { PrismaClient } from "@prisma/client"
import { OAuth2Client } from "google-auth-library"
import { AuthRoutes } from "./auth/AuthRoutes"

export class Router {
    public static newRouter(connection: PrismaClient, googleClient: OAuth2Client) {
        const router = express.Router()

        const authRoutes = AuthRoutes.newAuthRoutes()
        router.use(authRoutes)

        const userRoutes = UserRoutes.newUserRoutes(connection, googleClient)
        router.use(userRoutes)

        const postRoutes = PostRoutes.newPostRoutes(connection)
        router.use(postRoutes)

        return router
    }
}