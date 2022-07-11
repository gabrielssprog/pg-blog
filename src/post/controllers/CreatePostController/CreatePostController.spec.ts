import { CreatePostController } from "./CreatePostController"

describe('Create user controller', () => {
    const user = {
        id: '12'
    }
    const post = {
        id: 1,
        authorId: user.id,
        title: 'adsf',
        picture: 'asdf',
        content: '123'
    }
    const request: any = {
        body: {
            post
        },
        cookies: {
            user
        }
    }
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const next: any = jest.fn()

    it('should call "json" with created post', async () => {
        const createPostController = new CreatePostController(
            {
                execute: () => post
            } as any
        )

        await createPostController.handler(
            request,
            response,
            () => { }
        )

        expect(response.json).toBeCalledWith({
            post
        })
    })

    it('should call "next" with error', async () => {
        const createPostController = new CreatePostController(
            {
                execute: () => { throw new Error()}
            } as any
        )

        await createPostController.handler(
            request,
            response,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })
})