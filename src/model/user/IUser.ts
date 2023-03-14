import {Authentication} from "../authentication/Authentication";
import {Jwt} from "../authentication/Jwt";
import {ContactType} from "../type/ContactType";

export interface IUser {
    auth: Authentication;
    jwt: Jwt;
    contactType?: ContactType;
    phone?: string;
    mail?: string;
    link?: string;
    isAuth: boolean;
}

export interface IUserState {
    user: IUser | null;
    isLoading: boolean;
    error?: string | null;
}