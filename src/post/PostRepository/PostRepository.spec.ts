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
        findMany: () => [post],
        update: () => post,
        delete: () => post
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

    it('should return updated post', async () => {
        const postRepository = new PostRepository(connection)
        const postUpdated = await postRepository.updateOne(post)

        expect(postUpdated).toStrictEqual(post)
    })

    it('should return deleted post', async () => {
        const postRepository = new PostRepository(connection)
        const postDeleted = await postRepository.deleteOne(post)

        expect(postDeleted).toStrictEqual(post)
    })
})