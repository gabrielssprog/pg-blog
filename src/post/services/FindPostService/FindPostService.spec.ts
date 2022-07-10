import { FindPostService } from "./FindPostService"

describe('Find Post Service', () => {
    const post = {
        id: 1,
        authorId: '12',
        title: 'adsf',
        picture: 'asdf',
        content: '123' 
    }

    it('should return post', async () => {
        const findPostService = new FindPostService(
            {
                findOne: () => post
            } as any
        )

        const foundPost = await findPostService.execute({
            id: post.id
        })

        expect(foundPost).toStrictEqual(post)
    })
})