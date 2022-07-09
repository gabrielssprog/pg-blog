import { Request, Response } from "express";

export class UserViewController {
    public handle(request: Request, response: Response) {
        return response.render('user')
    }
}