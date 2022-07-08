import { PrismaClient } from "@prisma/client"
import { User, UserWithoutId, PartialUser } from "../User"

export class UserRepository {
  constructor(
    private connection: PrismaClient['user']
  ) { }

  public async create(data: UserWithoutId): Promise<User> {
    return await this.connection.create({
      data
    })
  }

  public async findOne(user: PartialUser): Promise<User | null> {
    return this.connection.findFirst({
        where: user
    })
  }
}