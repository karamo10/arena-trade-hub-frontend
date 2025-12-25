type UserRole = 'user' | 'admin';

export type User = {
    id: number,
    name: string,
    email: string,
    role: UserRole
}

