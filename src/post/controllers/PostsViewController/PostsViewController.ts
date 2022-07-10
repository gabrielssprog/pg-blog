import { Request, Response } from "express";

export class PostsViewController {
    public handle(request: Request, response: Response) {
        return response.render('posts')
    }
}