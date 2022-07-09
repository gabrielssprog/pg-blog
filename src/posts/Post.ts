export interface Post {
    id: number,
    authorId: string,
    title: string,
    content: string
}

export type PartialPost = Partial<Post>