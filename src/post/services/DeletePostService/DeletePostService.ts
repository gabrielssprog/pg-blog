import { Post } from "../../Post";
import { PostRepository } from "../../PostRepository/PostRepository";

export class DeletePostService {
    constructor(
        private postRepository: PostRepository
    ) {}

    public async execute(where: Partial<Post>): Promise<Post> {
        return await this.postRepository.deleteOne(where)
    }
}