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
        findFirst: () => post
    }

    it('should return created post', async () => {
        const postRepository = new PostRepository(connection)
        const postCreated = await postRepository.create(post)

        expect(postCreated).toStrictEqual(post)
    })

    it('should return post', async () => {
        const bookRepository = new PostRepository(connection)
        const postFound = await bookRepository.findOne(post)

        expect(postFound).toStrictEqual(post)
    })
})