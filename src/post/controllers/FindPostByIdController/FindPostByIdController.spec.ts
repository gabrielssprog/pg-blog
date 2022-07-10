import { FindPostByIdController } from "./FindPostByIdController"

describe('Find Post By Id Controller', () => {
    const post = {
        id: 1,
        authorId: '12',
        title: 'adsf',
        picture: 'asdf',
        content: '123' 
    }
    const request: any = {
        params: {
            postId: post.id
        }
    }
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const next = jest.fn()

    it('should call "json" with post', async () => {
        const findPostByIdController = new FindPostByIdController(
            {
                execute: () => post
            } as any
        )

        await findPostByIdController.handler(
            request,
            response,
            next
        )

        expect(response.json).toBeCalledWith({
            post
        })
    })

    it('should call "next" with error', async () => {
        const FindPostByAuthorController = new FindPostByIdController(
            {
                execute: () => { throw new Error()}
            } as any
        )

        await FindPostByAuthorController.handler(
            request,
            response,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })
})