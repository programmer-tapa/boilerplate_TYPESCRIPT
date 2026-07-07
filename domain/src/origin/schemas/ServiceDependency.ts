import { INTERFACE_UsecaseAuthorizationService } from "../interfaces/INTERFACE_UsecaseAuthorizationService";

export class ServiceDependency {
    constructor(
        public readonly authorizationService: INTERFACE_UsecaseAuthorizationService
    ) {}
}
