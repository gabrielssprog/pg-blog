import { Request, Response } from "express";

export class PostViewController {
    public handler(request: Request, response: Response) {
        return response.render('post')
    }
}