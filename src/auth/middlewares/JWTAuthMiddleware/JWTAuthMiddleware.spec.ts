import jwt from "jsonwebtoken"
import { JWTAuthMiddleware } from "./JWTAuthMiddleware"

describe('JWT auth middleware', () => {
    const user = {
        id: '23',
        google_id: 'asdf',
        email: 'asdf',
        name: 'asdf'
    }
    const request: any = {
        headers: {
            authorization: 'Bearer asdf'
        },
        cookies: {}
    }
    const response: any = {}
    const next: any = jest.fn()

    it('should request have user informations', () => {
        jwt.verify = () => ({
            user
        }) as any
        const jwtAuthMiddleware = new JWTAuthMiddleware()

        jwtAuthMiddleware.handler(request, response, next)

        expect(request.cookies.user).toStrictEqual(user)
    })

    it('should call "next" if token is invalid', () => {
        jwt.verify = () => {
            throw new Error()
        }

        const jwtAuthMiddleware = new JWTAuthMiddleware()

        jwtAuthMiddleware.handler(request, response, next)

        expect(next).toBeCalledWith(new Error())
    })

    it('should call "next" if does not have token', () => {
        const jwtAuthMiddleware = new JWTAuthMiddleware()

        jwtAuthMiddleware.handler({ headers: {} } as any, response, next)

        expect(next).toBeCalledWith(new Error())
    })
})