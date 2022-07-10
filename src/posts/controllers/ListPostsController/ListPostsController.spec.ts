import { ListPostsController } from "./ListPostsController"

describe('List Posts Controller', () => {
    const posts = [{
        id: 1,
        authorId: '12',
        title: 'adsf',
        picture: 'asdf',
        content: '123'
    }]
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const next = jest.fn()

    it('should list all posts', async () => {
        const listPostsController = new ListPostsController(
            {
                execute: () => posts
            } as any
        )

        await listPostsController.handler(
            {} as any,
            response,
            () => {}
        )

        expect(response.json).toBeCalledWith({
            posts
        })
    })

    it('should call "next" with error', async () => {
        const createPostController = new ListPostsController(
            {
                execute: () => { throw new Error()}
            } as any
        )

        await createPostController.handler(
            {} as any,
            {} as any,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })
})