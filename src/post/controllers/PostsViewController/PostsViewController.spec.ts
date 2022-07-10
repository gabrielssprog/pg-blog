import { PostsViewController } from "./PostsViewController"

describe('posts view controller', () => {
    it('should call "render" with correct view', () => {
        const postsViewController = new PostsViewController()
        const response: any = {
            render: jest.fn()
        }
        postsViewController.handler(
            {} as any,
            response,
        )

        expect(response.render).toBeCalledWith('posts')
    })
})