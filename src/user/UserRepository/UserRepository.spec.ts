import { UserRepository } from "./UserRepository"

describe('User Repository', () => {
    const user = {
        id: '123',
        google_id: '123',
        name: 'adf',
        email: 'asdf',
        picture: '123'
    }
    const connection: any = {
        create: () => user,
        findFirst: () => user
    }

    it('should return created user', async () => {
        const userRepository = new UserRepository(connection)
        const userCreated = await userRepository.create(user)

        expect(userCreated).toStrictEqual(user)
    })

    it('should return user', async () => {
        const bookRepository = new UserRepository(connection)
        const userFound = await bookRepository.findOne(user)

        expect(userFound).toStrictEqual(user)
    })
})