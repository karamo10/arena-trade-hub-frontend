type UserRole = 'user' | 'admin';

export type User = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    role: UserRole
    image?: string
}

export type Register = {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

export type Login = {
    email: string,
    password: string
}
