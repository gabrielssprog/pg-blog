import { CreatecreatePostViewController } from "./CreatecreatePostsViewController"

describe('createPost view controller', () => {
    it('should call "render" with correct view', () => {
        const createPostViewController = new CreatecreatePostViewController()
        const response: any = {
            render: jest.fn()
        }
        createPostViewController.handler(
            {} as any,
            response,
        )

        expect(response.render).toBeCalledWith('createPost')
    })
})