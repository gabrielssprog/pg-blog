import { FindPostService } from "../../services/FindPostService/FindPostService";
import { NextFunction, Request, Response } from "express";

export class FindPostByIdController {
    constructor(
        private findPostService: FindPostService
    ) {}

    public async handler(request: Request, response: Response, next: NextFunction) {
        try {
            const postId = request.params.postId
            const post = await this.findPostService.execute({
                id: Number(postId)
            })

            return response.status(200).json({
                post
            })
        } catch (error) {
            next(error)
        }
    }
}