import { PostViewController } from "./PostsViewController"

describe('post view controller', () => {
    it('should call "render" with correct view', () => {
        const postViewController = new PostViewController()
        const response: any = {
            render: jest.fn()
        }
        postViewController.handler(
            {} as any,
            response,
        )

        expect(response.render).toBeCalledWith('post')
    })
})