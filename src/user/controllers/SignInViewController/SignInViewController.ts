import { Request, Response } from "express";

export class SignInViewController {
    public handler(request: Request, response: Response) {
        return response.render('signin')
    }
}