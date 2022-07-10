import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { CreatePostController } from "./controllers/CreatePostController/CreatePostController";
import { ListPostsByAuthorController } from "./controllers/ListPostsByAuthorController/ListPostsByAuthorController";
import { ListPostsController } from "./controllers/ListPostsController/ListPostsController";
import { PostsViewController } from "./controllers/PostsViewController/PostsViewController";
import { PostViewController } from "./controllers/PostViewController/PostsViewController";
import { PostRepository } from "./PostRepository/PostRepository";
import { CreatePostService } from "./services/CreatePostService/CreatePostService";
import { ListPostsService } from "./services/ListPostsService/ListPostsService";

export class PostRoutes {
    public static newPostRoutes(connection: PrismaClient) {
        const postRoutes = Router()
        const postRepository = new PostRepository(connection.post)
        const createPostService = new CreatePostService(postRepository)
        const listPostsService = new ListPostsService(postRepository)

        const postsViewController = new PostsViewController()
        postRoutes.get('/pages/posts', postsViewController.handler)

        const postViewController = new PostViewController()
        postRoutes.get('/pages/posts/:postId', postViewController.handler)

        const createPostController = new CreatePostController(
            createPostService
        )
        postRoutes.post('/posts', createPostController.handler.bind(createPostController))

        const listPostsController = new ListPostsController(
            listPostsService
        )
        postRoutes.get('/posts', listPostsController.handler.bind(listPostsController))

        const listPostsByAuthorController = new ListPostsByAuthorController(
            listPostsService
        )
        postRoutes.get('/posts/author/:authorId', listPostsByAuthorController.handler.bind(listPostsByAuthorController))

        return postRoutes
    }
}