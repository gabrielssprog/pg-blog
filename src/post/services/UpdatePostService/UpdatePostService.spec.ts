import { UpdatePostService } from "./UpdatePostService"

describe('Update Post Service', () => {
    const post = {
        id: 1,
        authorId: '123',
        title: 'asdf',
        content: '123'
    }

    it('should return updated post', async () => {
        const updatePostService = new UpdatePostService({
            updateOne: () => post
        } as any)

        const updatedPost = await updatePostService.execute(post, post)

        expect(updatedPost).toStrictEqual(post)
    })
})