import { DeletePostByIdController } from "./DeletePostByIdController"

describe('delete Post By Id Controller', () => {
    const user = {
        id: '123',
    }
    const post = {
        id: 1,
        authorId: user.id,
        title: 'adsf',
        content: '123' 
    }
    const request: any = {
        params: {
            postId: post.id
        },
        cookies: {
            user 
        }
    }
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const next = jest.fn()

    it('should call "json" with post', async () => {
        const deletePostByIdController = new DeletePostByIdController(
            {
                execute: () => post
            } as any,
            {
                execute: () => post
            } as any
        )

        await deletePostByIdController.handler(
            request,
            response,
            next
        )

        expect(response.json).toBeCalledWith({
            post
        })
    })

    it('should call "next" with error when post not exists', async () => {
        const deletePostByAuthorController = new DeletePostByIdController(
            {
                execute: () => null
            } as any,
            {
                execute: () => null
            } as any
        )

        await deletePostByAuthorController.handler(
            request,
            response,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })

    it('should call "next" with error if user.id != authorId', async () => {
        const deletePostByAuthorController = new DeletePostByIdController(
            {
                execute: () => ({ authorId: user.id + 1 })
            } as any,
            {
                execute: () => null
            } as any
        )

        await deletePostByAuthorController.handler(
            request,
            response,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })
})