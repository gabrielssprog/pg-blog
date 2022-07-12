import { NextFunction, Request, Response } from "express";
import { FindPostService } from "../../services/FindPostService/FindPostService";
import { DeletePostService } from "../../services/DeletePostService/DeletePostService";

export class DeletePostByIdController {
    constructor(
        private findPostService: FindPostService,
        private updatePostService: DeletePostService
    ) {}

    public async handler(request: Request, response: Response, next: NextFunction) {
        try {
            const postId = Number(request.params.postId)
            const user = request.cookies.user
            const postExists = await this.findPostService.execute({
                id: postId
            })

            if (!postExists) {
                throw new Error()
            }

            if (postExists.authorId !== user.id) {
                throw new Error()
            }

            const postDeleted = await this.updatePostService.execute({
                id: postId,
            })

            return response.status(200).json({
                post: postDeleted
            })
        } catch (error) {
            next(error)
        }
    }
}