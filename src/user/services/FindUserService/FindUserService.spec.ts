import { FindUserService } from "./FindUserService"

describe('find user service', () => {
    it('should return user', async () => {
        const findUserService = new FindUserService({
            findOne: async (where: any) => where
        } as any)

        const userToFind = {
            id: '123asdf',
            email: 'email@email.com',
            google_id: '123',
            name: 'gabriel',
            picture: 'http://picture.com'
        }

        const user = await findUserService
            .execute(userToFind)

        expect(user).toStrictEqual(userToFind)
    })
})