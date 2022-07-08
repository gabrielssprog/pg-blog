export interface User {
    id: string;
    google_id: string;
    name: string;
    email: string;
    picture: string;
}

export type UserWithoutId = Omit<User, 'id'>
export type PartialUser = Partial<User>