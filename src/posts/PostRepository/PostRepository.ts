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
    return this.connection.findFirst({
        where: post
    })
  }
}