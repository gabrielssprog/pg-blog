import { NextFunction, Request, Response } from "express";
import { decode, JwtPayload, sign } from "jsonwebtoken";

export class RefreshTokenController {
    public handler(request: Request, response: Response, next: NextFunction) {
        try {
            const oldToken = (request.headers.authorization || '').split(' ').pop()
            if (!oldToken) {
                throw new Error()
            }

            const { user } = decode(oldToken) as JwtPayload

            const token = sign({ user }, process.env.JWT_SECRET || 'secret')

            return response.status(200).json({
                token
            })
        } catch (error) {
            next(error)
        }
    }
}