import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { SignInViewController } from "./controllers/SignInViewController/SignInViewController";

export class UserRoutes {
    public static newUserRoutes(connection: PrismaClient) {
        const userRoute = Router()

        const signInViewController = new SignInViewController()
        userRoute.get('/pages/users/signin', signInViewController.handle)

        return userRoute
    }
}