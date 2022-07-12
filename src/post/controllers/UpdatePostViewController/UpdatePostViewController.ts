import { Request, Response } from "express";

export class UpdatePostViewController {
    public handler(request: Request, response: Response) {
        return response.render('updatePost')
    }
}