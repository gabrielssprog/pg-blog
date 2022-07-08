import { Request, Response } from "express";

export class SignInViewController {
    public handle(request: Request, response: Response) {
        return response.render('signin')
    }
}