import { User } from "../schemas/User";

export interface INTERFACE_UsecaseAuthorizationService {
    isAuthorized(user: User, serviceName: string): boolean;
}
