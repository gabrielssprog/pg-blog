import { Request, Response } from "express";

export class UserViewController {
    public handler(request: Request, response: Response) {
        return response.render('user')
    }
}