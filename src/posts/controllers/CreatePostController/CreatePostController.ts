import { NextFunction, Request, Response } from "express";
import { CreatePostService } from "../../services/CreatePostService/CreatePostService";

export class CreatePostController {
    constructor(
        private createPostService: CreatePostService
    ) {}

    public async handler(request: Request, response: Response, next: NextFunction) {
        try {
            const post = await this.createPostService.execute(
                request.body.post
            )

            return response.status(201).json({
                post
            })
        } catch (error) {
            next(error)
        }
    }
}