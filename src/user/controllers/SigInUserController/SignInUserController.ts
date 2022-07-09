import { NextFunction, Request, Response } from "express";
import { OAuth2Client, TokenPayload } from "google-auth-library";
import { CreateUserService } from "../../services/CreateUserService/CreateUserService";
import { FindUserService } from "../../services/FindUserService/FindUserService";

export class SignInUserController {
    constructor(
        private createUserService: CreateUserService,
        private findUserService: FindUserService,
        private googleClient: OAuth2Client
    ) {}

    public async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const google_token = request.body.google_token

            const ticket = await this.googleClient.verifyIdToken({
                idToken: google_token,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            const payload = ticket.getPayload() as TokenPayload

            const userExists = await this.findUserService.execute({
                google_id: payload.sub
            })

            if (userExists) {
                return response.status(200).json({
                    user: userExists
                })
            }

            const user = await this.createUserService.execute({
                google_id: payload.sub,
                name: payload.name!,
                email: payload.email!,
                picture: payload.picture!
            })

            return response.status(200).json({
                user
            })
        } catch(error) {
            next(error)
        }
    }
}