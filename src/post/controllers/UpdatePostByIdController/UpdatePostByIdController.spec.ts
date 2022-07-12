import { UpdatePostByIdController } from "./UpdatePostByIdController"

describe('Update Post By Id Controller', () => {
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
        },
        body: {
            post
        }
    }
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const next = jest.fn()

    it('should call "json" with post', async () => {
        const updatePostByIdController = new UpdatePostByIdController(
            {
                execute: () => post
            } as any,
            {
                execute: () => post
            } as any
        )

        await updatePostByIdController.handler(
            request,
            response,
            next
        )

        expect(response.json).toBeCalledWith({
            post
        })
    })

    it('should call "next" with error when post not exists', async () => {
        const UpdatePostByAuthorController = new UpdatePostByIdController(
            {
                execute: () => null
            } as any,
            {
                execute: () => null
            } as any
        )

        await UpdatePostByAuthorController.handler(
            request,
            response,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })

    it('should call "next" with error if user.id != authorId', async () => {
        const UpdatePostByAuthorController = new UpdatePostByIdController(
            {
                execute: () => ({ authorId: user.id + 1 })
            } as any,
            {
                execute: () => null
            } as any
        )

        await UpdatePostByAuthorController.handler(
            request,
            response,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })
})