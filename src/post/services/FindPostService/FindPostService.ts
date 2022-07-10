import { Post } from "../../Post";
import { PostRepository } from "../../PostRepository/PostRepository";

export class FindPostService {
    constructor(
        private postRepository: PostRepository
    ) {}

    public async execute(post: Partial<Post>) {
        return await this.postRepository.findOne(post)
    }
}