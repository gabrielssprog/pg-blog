import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { PostsViewController } from "./controllers/PostsViewController/PostsViewController";

export class PostRoutes {
    public static newPostRoutes(connection: PrismaClient) {
        const postRoutes = Router()

        const postsViewController = new PostsViewController()
        postRoutes.get('/pages/posts', postsViewController.handle)

        return postRoutes
    }
}