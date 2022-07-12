import { Router } from "express";
import { JWTAuthMiddleware } from "./middlewares/JWTAuthMiddleware/JWTAuthMiddleware";

export class AuthRoutes {
    public static newAuthRoutes() {
        const authRoutes = Router()

        const jwtAuthMiddleware = new JWTAuthMiddleware()
        authRoutes.post('/posts', jwtAuthMiddleware.handler)
        authRoutes.put('/posts/:postId', jwtAuthMiddleware.handler)

        return authRoutes
    }
}