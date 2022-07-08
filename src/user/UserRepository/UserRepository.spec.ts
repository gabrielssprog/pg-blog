import { UserRepository } from "./UserRepository"

describe('User Repository', () => {
    const connection: any = {
        create: jest.fn(async (options: any) => ({
            ...options.data,
            id: `${Math.random()}`
        })),
        findFirst: jest.fn(
            async (options: any) => options.where
        ),
    }

    it('should return created user', async () => {
        const userRepository = new UserRepository(connection)
        const userToCreate = {
            email: 'email@email.com',
            google_id: '123',
            name: 'gabriel',
            picture: 'http://picture.com'
        }
        const userCreated = await userRepository.create(userToCreate)

        expect(userCreated).toStrictEqual({
            ...userToCreate,
            id: userCreated.id
        })
    })

    it('should return user', async () => {
        const bookRepository = new UserRepository(connection)
        const userToFind = {
            id: "123asdf",
            email: 'email@email.com',
            google_id: '123',
            name: 'gabriel',
            picture: 'http://picture.com'
        }
        const user = await bookRepository.findOne(userToFind)

        expect(user).toStrictEqual(userToFind)
    })
})