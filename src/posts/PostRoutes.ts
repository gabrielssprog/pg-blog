import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { CreatePostController } from "./controllers/CreatePostController/CreatePostController";
import { PostsViewController } from "./controllers/PostsViewController/PostsViewController";
import { PostRepository } from "./PostRepository/PostRepository";
import { CreatePostService } from "./services/CreatePostService/CreatePostService";

export class PostRoutes {
    public static newPostRoutes(connection: PrismaClient) {
        const postRoutes = Router()
        const postRepository = new PostRepository(connection.post)
        const createPostService = new CreatePostService(postRepository)

        const postsViewController = new PostsViewController()
        postRoutes.get('/pages/posts', postsViewController.handle)

        const createPostController = new CreatePostController(
            createPostService
        )
        postRoutes.post('/users/:userId/posts', createPostController.handler.bind(createPostController))

        return postRoutes
    }
}