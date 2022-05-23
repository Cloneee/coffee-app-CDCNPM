export interface ILoginPayload {
    username: string;
    password: string;
}
export interface ILoginRespone {
    token: string;
    name: string;
    id: string;
}
export interface IRegisterPayload {
    email: string;
    password: string;
    name: string;
}