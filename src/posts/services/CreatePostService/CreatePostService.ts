import { Post } from "../../Post";
import { PostRepository } from "../../PostRepository/PostRepository";

export class CreatePostService {
    constructor(
        private postRepository: PostRepository
    ) {}

    public async execute(post: Omit<Post, 'id'>) {
        return await this.postRepository.create(post)
    }
}