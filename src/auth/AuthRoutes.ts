import { Router } from "express";
import { RefreshTokenController } from "./controllers/RefreshTokenController/RefreshTokenController";
import { JWTAuthMiddleware } from "./middlewares/JWTAuthMiddleware/JWTAuthMiddleware";

export class AuthRoutes {
    public static newAuthRoutes() {
        const authRoutes = Router()

        const jwtAuthMiddleware = new JWTAuthMiddleware()
        authRoutes.post('/posts', jwtAuthMiddleware.handler)
        authRoutes.put('/posts/:postId', jwtAuthMiddleware.handler)
        authRoutes.delete('/posts/:postId', jwtAuthMiddleware.handler)

        const refreshTokenController = new RefreshTokenController()
        authRoutes.get('/auth/refresh', refreshTokenController.handler)

        return authRoutes
    }
}