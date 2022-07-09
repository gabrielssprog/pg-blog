import { SignInUserController } from "./SignInUserController"

describe('Sign in user', () => {
    const user = {
        id: '123',
        google_id: '123',
        name: 'adf',
        email: 'asdf',
        picture: '123'
    }
    const googleClient: any = {
        verifyIdToken: () => ({
            getPayload: () => ({
                sub: user.google_id
            })
        })
    }
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const service: any = {
        execute: () => user
    }
    const request: any = {
        body: {
            google_token: 'asdf'
        }
    }

    it('should call "json" with user when user exists', async () => {
        const signInUserController = new SignInUserController(
            service,
            service,
            googleClient
        )

        await signInUserController.handle(
            request,
            response,
            () => { }
        )

        expect(response.json).toBeCalledWith({
            user
        })
    })

    it('should call "json" with user when user not exists', async () => {
        const signInUserController = new SignInUserController(
            service,
            {
                execute: () => null
            } as any,
            googleClient
        )

        await signInUserController.handle(
            request,
            response,
            () => { }
        )

        expect(response.json).toBeCalledWith({
            user
        })
    })

    it('should call "next" with error when token is invalid', async () => {
        const next = jest.fn()
        const signInUserController = new SignInUserController(
            service,
            service,
            {
                verifyIdToken: () => {
                    throw new Error()
                }
            } as any
        )

        await signInUserController.handle(
            request,
            response,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })
})