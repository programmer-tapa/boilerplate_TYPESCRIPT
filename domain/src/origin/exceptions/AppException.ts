import { ServiceStatus } from "../schemas/ServiceStatus";

export abstract class AppException extends Error {
    protected constructor(
        public readonly status: ServiceStatus,
        message: string
    ) {
        super(message);
        // Set prototype explicitly to preserve instanceof checks
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
