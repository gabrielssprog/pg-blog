import { SignInViewController } from "./SignInViewController"

describe('Signin view controller', () => {
    it('should call "render" with correct view', () => {
        const signinViewController = new SignInViewController()
        const response: any = {
            render: jest.fn()
        }
        signinViewController.handle(
            {} as any,
            response,
        )

        expect(response.render).toBeCalledWith('signin')
    })
})