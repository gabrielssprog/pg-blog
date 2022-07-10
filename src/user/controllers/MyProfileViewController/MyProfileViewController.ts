import { Request, Response } from "express";

export class MyProfileViewController {
    public handler(request: Request, response: Response) {
        return response.render('myProfile')
    }
}