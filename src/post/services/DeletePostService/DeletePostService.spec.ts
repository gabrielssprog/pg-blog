import { DeletePostService } from "./DeletePostService"

describe('Delete Post Service', () => {
    const post = {
        id: 1,
        authorId: '123',
        title: 'asdf',
        content: '123'
    }

    it('should return deleted post', async () => {
        const deletePostService = new DeletePostService({
            deleteOne: () => post
        } as any)

        const deletedPost = await deletePostService.execute(post)

        expect(deletedPost).toStrictEqual(post)
    })
})