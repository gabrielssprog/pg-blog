import { Request, Response } from "express";

export class PostsViewController {
    public handler(request: Request, response: Response) {
        return response.render('posts')
    }
}