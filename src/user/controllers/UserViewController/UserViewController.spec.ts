import { UserViewController } from "./UserViewController"

describe('user view controller', () => {
    it('should call "render" with user', () => {
        const userViewController = new UserViewController()
        const response: any = {
            render: jest.fn()
        }
        userViewController.handle(
            {} as any,
            response,
        )

        expect(response.render).toBeCalledWith('user')
    })
})