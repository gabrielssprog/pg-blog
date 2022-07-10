import { Request, Response } from "express";

export class CreatePostViewController {
    public handler(request: Request, response: Response) {
        return response.render('createPost')
    }
}