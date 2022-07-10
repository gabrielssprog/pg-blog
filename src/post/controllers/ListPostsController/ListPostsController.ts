import { NextFunction, Request, Response } from "express";
import { ListPostsService } from "../../services/ListPostsService/ListPostsService";

export class ListPostsController {
    constructor(
        public listPostsService: ListPostsService
    ) {}

    public async handler(request: Request, response: Response, next: NextFunction) {
        try {
            const posts = await this.listPostsService.execute()

            return response.status(200).json({
                posts
            })
        } catch(error) {
            next(error)
        }
    }
}