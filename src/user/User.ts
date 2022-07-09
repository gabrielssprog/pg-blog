export interface User {
    id: string;
    google_id: string;
    name: string;
    email: string;
    picture: string;
}

export type PartialUser = Partial<User>