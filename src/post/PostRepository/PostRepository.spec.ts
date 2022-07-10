import { PostRepository } from "./PostRepository"

describe('Post Repository', () => {
    const post = {
        id: 1,
        authorId: '12',
        title: 'adsf',
        picture: 'asdf',
        content: '123' 
    }
    const connection: any = {
        create: () => post,
        findFirst: () => post,
        findMany: () => [post]
    }
    const postRepository = new PostRepository(connection)

    it('should return created post', async () => {
        const postCreated = await postRepository.create(post)

        expect(postCreated).toStrictEqual(post)
    })

    it('should return post', async () => {
        const postRepository = new PostRepository(connection)
        const postFound = await postRepository.findOne(post)

        expect(postFound).toStrictEqual(post)
    })

    it('should return all posts', async () => {
        const postsFound = await postRepository.findAll(post)

        expect(postsFound).toStrictEqual([post])
    })
})