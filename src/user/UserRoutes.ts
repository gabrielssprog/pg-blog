import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { OAuth2Client } from "google-auth-library";
import { MyProfileViewController } from "./controllers/MyProfileViewController/MyProfileViewController";
import { SignInUserController } from "./controllers/SigInUserController/SignInUserController";
import { SignInViewController } from "./controllers/SignInViewController/SignInViewController";
import { UserViewController } from "./controllers/UserViewController/UserViewController";
import { CreateUserService } from "./services/CreateUserService/CreateUserService";
import { FindUserService } from "./services/FindUserService/FindUserService";
import { UserRepository } from "./UserRepository/UserRepository";

export class UserRoutes {
    public static newUserRoutes(connection: PrismaClient, googleClient: OAuth2Client) {
        const userRoute = Router()
        const userRepository = new UserRepository(connection.user)
        const createUserService = new CreateUserService(userRepository)
        const findUserService = new FindUserService(userRepository)

        const signInViewController = new SignInViewController()
        userRoute.get('/pages/signin', signInViewController.handler)

        const userViewController = new UserViewController()
        userRoute.get('/pages/user/:userId', userViewController.handler)

        const myProfileViewController = new MyProfileViewController()
        userRoute.get('/pages/myprofile', myProfileViewController.handler)

        const signInUserController = new SignInUserController(
            createUserService,
            findUserService,
            googleClient
        )
        userRoute.post('/users/signin', signInUserController.handle.bind(signInUserController))

        return userRoute
    }
}