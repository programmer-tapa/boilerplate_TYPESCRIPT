import { INTERFACE_UsecaseAuthorizationService } from "../interfaces/INTERFACE_UsecaseAuthorizationService";
import { ServiceDependency } from "../schemas/ServiceDependency";
import { ServiceInput } from "../schemas/ServiceInput";
import { ServiceOutput } from "../schemas/ServiceOutput";
import { User } from "../schemas/User";
import { USECASE_Abstract } from "./USECASE_Abstract";
import { AppException } from "../exceptions/AppException";

export abstract class SERVICE_Abstract<I, O> {
    protected readonly authorizationService: INTERFACE_UsecaseAuthorizationService;

    constructor(dependencies: ServiceDependency) {
        this.authorizationService = dependencies.authorizationService;
    }

    protected abstract detectServiceName(): string;

    protected abstract build(input: I): USECASE_Abstract<I, O>;

    protected authorize(user: User): boolean {
        if (!user) {
            return false;
        }
        const serviceName = this.detectServiceName();
        return this.authorizationService.isAuthorized(user, serviceName);
    }

    public run(input: ServiceInput<I>): ServiceOutput<O> {
        // Authorization check
        if (!this.authorize(input.user)) {
            return ServiceOutput.unauthorized<O>("User is not authorized to perform this action");
        }

        // Build and execute usecase
        try {
            const usecase = this.build(input.data);
            const result = usecase.execute(input.data);
            return ServiceOutput.success<O>(result);
        } catch (e: any) {
            if (e instanceof AppException) {
                return new ServiceOutput<O>(e.status, null, e.message);
            }
            return ServiceOutput.failure<O>(e.message || String(e));
        }
    }
}
