import { MyProfileViewController } from "./MyProfileViewController"

describe('My Profile View Controller', () => {
    it('should call "render" with myProfile', () => {
        const myProfileViewController = new MyProfileViewController()
        const response: any = {
            render: jest.fn()
        }
        myProfileViewController.handler(
            {} as any,
            response,
        )

        expect(response.render).toBeCalledWith('myProfile')
    })
})