import { NextFunction, Request, Response } from "express";
import { ListPostsService } from "../../services/ListPostsService/ListPostsService";

export class ListPostsByAuthorController {
    constructor(
        private listPostsService: ListPostsService
    ) {}

    public async handler(request: Request, response: Response, next: NextFunction) {
        try {
            const authorId = request.params.authorId

            const posts = await this.listPostsService.execute({
                authorId
            })

            return response.status(200).json({
                posts
            })
        } catch (error) {
            next(error)
        }
    }
}