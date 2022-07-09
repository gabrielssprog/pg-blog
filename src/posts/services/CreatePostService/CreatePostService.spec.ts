import { CreatePostService } from "./CreatePostService"

describe('Create post service', () => {
    it('should return created post', async () => {
        const post = {
            id: 1,
            authorId: '12',
            title: 'adsf',
            picture: 'asdf',
            content: '123' 
        }
        const createPostService = new CreatePostService(
            { 
                create: () => post
            } as any
        )

        const createdPost = await createPostService.execute(post)

        expect(createdPost).toStrictEqual(post)
    })
})