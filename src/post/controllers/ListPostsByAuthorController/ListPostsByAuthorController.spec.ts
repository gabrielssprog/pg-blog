import { ListPostsByAuthorController } from "./ListPostsByAuthorController"

describe('List Posts By Author Controller', () => {
    const posts = [{
        id: 1,
        authorId: '12',
        title: 'adsf',
        picture: 'asdf',
        content: '123'
    }]
    const request: any = {
        params: {
            authorId: posts[0].authorId
        }
    }
    const response: any = {
        status: () => response,
        json: jest.fn()
    }
    const next = jest.fn()

    it('should list all posts', async () => {
        const listPostsByAuthorController = new ListPostsByAuthorController(
            {
                execute: () => posts
            } as any
        )

        await listPostsByAuthorController.handler(
            request,
            response,
            () => {}
        )

        expect(response.json).toBeCalledWith({
            posts
        })
    })

    it('should call "next" with error', async () => {
        const listPostsByAuthorController = new ListPostsByAuthorController(
            {
                execute: () => { throw new Error()}
            } as any
        )

        await listPostsByAuthorController.handler(
            request,
            {} as any,
            next
        )

        expect(next).toBeCalledWith(new Error())
    })
})