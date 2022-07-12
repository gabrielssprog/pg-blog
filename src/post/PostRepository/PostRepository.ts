import { PrismaClient } from "@prisma/client"
import { Post, PartialPost } from "../Post"

export class PostRepository {
  constructor(
    private connection: PrismaClient['post']
  ) { }

  public async create(data: Omit<Post, 'id'>): Promise<Post> {
    return await this.connection.create({
      data
    })
  }

  public async findOne(where: PartialPost): Promise<Post | null> {
    return await this.connection.findFirst({
        where
    })
  }

  public async findAll(where?: Partial<Post>): Promise<Post[]> {
    return await this.connection.findMany({
      where
    })
  }

  public async updateOne(data: Partial<Post>, where: Partial<Post> = {}): Promise<Post> {
    return await this.connection.update({
      data,
      where
    })
  }

  public async deleteOne(where: Partial<Post> = {}): Promise<Post> {
    return await this.connection.delete({
      where
    })
  }
}