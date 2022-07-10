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

  public async findOne(post: PartialPost): Promise<Post | null> {
    return await this.connection.findFirst({
        where: post
    })
  }

  public async findAll(post?: Partial<Post>): Promise<Post[]> {
    return await this.connection.findMany({
      where: post
    })
  }
}