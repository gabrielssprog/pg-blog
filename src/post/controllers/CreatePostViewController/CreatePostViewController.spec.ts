import { CreatePostViewController } from "./CreatePostViewController"

describe('createPost view controller', () => {
    it('should call "render" with correct view', () => {
        const createPostViewController = new CreatePostViewController()
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