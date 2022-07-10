import { ListPostsService } from "./ListPostsService"

describe('List posts service', () => {
    it('should return posts', async () => {
        const posts = [{
            id: 1,
            authorId: '12',
            title: 'adsf',
            picture: 'asdf',
            content: '123' 
        }]
        const listPostsService = new ListPostsService({
            findAll: () => posts
        } as any)

        const listedPosts = await listPostsService.execute(posts[0])

        expect(listedPosts).toStrictEqual(posts)
    })
})