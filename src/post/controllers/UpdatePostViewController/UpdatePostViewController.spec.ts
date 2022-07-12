import { UpdatePostViewController } from "./UpdatePostViewController"

describe('post view controller', () => {
    it('should call "render" with correct view', () => {
        const updatePostViewController = new UpdatePostViewController()
        const response: any = {
            render: jest.fn()
        }
        updatePostViewController.handler(
            {} as any,
            response,
        )

        expect(response.render).toBeCalledWith('updatePost')
    })
})