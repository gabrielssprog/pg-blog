import { RefreshTokenController } from "./RefreshTokenController"
import jsonwebtoken from "jsonwebtoken"

describe('Refresh Token Controller', () => {
    const token = 'asdf'
    const user = {
        id: 1
    }
    const request: any = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const next = jest.fn()
    const refreshTokenController = new RefreshTokenController()
    jsonwebtoken.sign = () => token
    jsonwebtoken.decode = () => ({ user }) as any

    it('should call "json" with new token', () => {
        refreshTokenController.handler(request, response, next)

        expect(response.json).toBeCalledWith({
            token
        })
    })

    it('should call "next" with error', () => {
        refreshTokenController.handler({
            headers: {}
        } as any, response, next)

        expect(next).toBeCalledWith(new Error())
    })
})