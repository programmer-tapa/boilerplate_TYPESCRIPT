import { INTERFACE_UsecaseAuthorizationService } from "../interfaces/INTERFACE_UsecaseAuthorizationService";
import { User } from "../schemas/User";

export class CONTRACT_UsecaseAuthorizationService implements INTERFACE_UsecaseAuthorizationService {
    public isAuthorized(user: User, usecaseName: string): boolean {
        console.log("Inside CONTRACT_UsecaseAuthorizationService");
        console.log(`Authorizing user ${user?.email} for usecase ${usecaseName}`);
        return user !== null && user !== undefined && user.id !== null && user.id !== undefined;
    }
}
