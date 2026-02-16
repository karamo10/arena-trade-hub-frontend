export type FullProfile = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    address?: string;
    street_address?: string;
    phone_number?: string;
    image?: string;
}

export type BasicProfile = {
    id: number;
    first_name: string;
    email: string;
    image?: string;
}

export type ProfileReadOnly = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

// export type UpdateUserProfile = {
//     name?: string;
//     address?: string;
//     whatsapp_number?: string;
//     image?: string;
// }