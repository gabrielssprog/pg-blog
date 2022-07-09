import { CreateUserService } from "./CreateUserService"

describe('Create user service', () => {
    const create = async (data: any) => ({
        ...data,
        id: `${Math.random()}`
    })
    
    it('should return created user', async () => {
        const createUserService = new CreateUserService({
            create,
            findOne: async () => null
        } as any)

        const userToCreate = {
            email: 'email@email.com',
            google_id: '123',
            name: 'gabriel',
            picture: 'http://picture.com'
        }

        const userCreated = await createUserService
            .execute(userToCreate)

        expect(userCreated).toStrictEqual({
            ...userToCreate,
            id: userCreated.id
        })
    })
})