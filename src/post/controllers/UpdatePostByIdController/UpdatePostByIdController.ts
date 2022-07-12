import { NextFunction, Request, Response } from "express";
import { FindPostService } from "../../services/FindPostService/FindPostService";
import { UpdatePostService } from "../../services/UpdatePostService/UpdatePostService";

export class UpdatePostByIdController {
    constructor(
        private findPostService: FindPostService,
        private updatePostService: UpdatePostService
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

            const postUpdated = await this.updatePostService.execute(
                {
                    ...request.body.post,
                    authorId: user.id
                },
                {
                    id: postId,
                }
            )

            return response.status(200).json({
                post: postUpdated
            })
        } catch (error) {
            next(error)
        }
    }
}