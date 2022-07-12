import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { CreatePostController } from "./controllers/CreatePostController/CreatePostController";
import { CreatePostViewController } from "./controllers/CreatePostViewController/CreatePostViewController";
import { DeletePostByIdController } from "./controllers/DeletePostByIdContoller/DeletePostByIdController";
import { FindPostByIdController } from "./controllers/FindPostByIdController/FindPostByIdController";
import { ListPostsByAuthorController } from "./controllers/ListPostsByAuthorController/ListPostsByAuthorController";
import { ListPostsController } from "./controllers/ListPostsController/ListPostsController";
import { PostsViewController } from "./controllers/PostsViewController/PostsViewController";
import { PostViewController } from "./controllers/PostViewController/PostsViewController";
import { UpdatePostByIdController } from "./controllers/UpdatePostByIdController/UpdatePostByIdController";
import { UpdatePostViewController } from "./controllers/UpdatePostViewController/UpdatePostViewController";
import { PostRepository } from "./PostRepository/PostRepository";
import { CreatePostService } from "./services/CreatePostService/CreatePostService";
import { DeletePostService } from "./services/DeletePostService/DeletePostService";
import { FindPostService } from "./services/FindPostService/FindPostService";
import { ListPostsService } from "./services/ListPostsService/ListPostsService";
import { UpdatePostService } from "./services/UpdatePostService/UpdatePostService";

export class PostRoutes {
    public static newPostRoutes(connection: PrismaClient) {
        const postRoutes = Router()
        const postRepository = new PostRepository(connection.post)
        const createPostService = new CreatePostService(postRepository)
        const listPostsService = new ListPostsService(postRepository)
        const findPostService = new FindPostService(postRepository)
        const updatePostService = new UpdatePostService(postRepository)
        const deletePostService = new DeletePostService(postRepository)

        const postsViewController = new PostsViewController()
        postRoutes.get('/pages/posts', postsViewController.handler)

        const createPostViewController = new CreatePostViewController()
        postRoutes.get('/pages/post/new', createPostViewController.handler)

        const postViewController = new PostViewController()
        postRoutes.get('/pages/post/:postId', postViewController.handler)

        const updatePostViewController = new UpdatePostViewController()
        postRoutes.get('/pages/post/update/:postId', updatePostViewController.handler)

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

        const findPostByIdController = new FindPostByIdController(
            findPostService
        )
        postRoutes.get('/posts/:postId', findPostByIdController.handler.bind(findPostByIdController))

        const updatePostByIdController = new UpdatePostByIdController(
            findPostService,
            updatePostService
        )
        postRoutes.put('/posts/:postId', updatePostByIdController.handler.bind(updatePostByIdController))
        const deletePostByIdController = new DeletePostByIdController(
            findPostService,
            deletePostService
        )
        postRoutes.delete('/posts/:postId', deletePostByIdController.handler.bind(deletePostByIdController))

        return postRoutes
    }
}