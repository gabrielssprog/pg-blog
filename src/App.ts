import { PrismaClient } from "@prisma/client"
import express from "express"
import { OAuth2Client } from "google-auth-library"
import { join } from "path"
import { Router } from "./Router"

export class App {
    public static newApp(connection: PrismaClient, googleClient: OAuth2Client) {
        const app = express()

        app.use(express.json())

        app.set('views', join(__dirname, 'views'))
        app.set('view engine', 'ejs')

        const router = Router.newRouter(connection, googleClient)

        app.use(router)

        return app
    }
}