import { PrismaClient } from "@prisma/client"
import express from "express"
import { join } from "path"
import { Router } from "./Router"

export class App {
    public static newApp(connection: PrismaClient) {
        const app = express()

        app.set('views', join(__dirname, 'views'))
        app.set('view engine', 'ejs')

        const router = Router.newRouter(connection)

        app.use(router)

        return app
    }
}