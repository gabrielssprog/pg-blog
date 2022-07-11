import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export class JWTAuthMiddleware {
    public handler(request: Request, response: Response, next: NextFunction) {
        try {
            const token = (request.headers.authorization || '')
                .split(' ')
                .pop()
            
            if (!token) {
                throw new Error()
            }

            const { user } = jwt.verify(token, process.env.JWT_SECRET || 'secret') as JwtPayload
            request.cookies = {
                ...request.cookies,
                user
            }

            next()
        } catch(error) {
            next(error)
        }
    }
}