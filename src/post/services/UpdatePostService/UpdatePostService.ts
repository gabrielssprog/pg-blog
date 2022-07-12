import { Post } from "../../Post";
import { PostRepository } from "../../PostRepository/PostRepository";

export class UpdatePostService {
    constructor(
        private postRepository: PostRepository
    ) {}

    public async execute(data: Partial<Post>, where: Partial<Post>): Promise<Post> {
        return await this.postRepository.updateOne(data, where)
    }
}