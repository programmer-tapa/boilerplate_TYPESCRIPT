import { ServiceStatus } from "./ServiceStatus";

export class ServiceOutput<O> {
    constructor(
        public readonly status: ServiceStatus,
        public readonly data: O | null,
        public readonly errorMessage: string | null = null
    ) {}

    public static success<O>(data: O): ServiceOutput<O> {
        return new ServiceOutput<O>(ServiceStatus.SUCCESS, data);
    }

    public static failure<O>(errorMessage: string): ServiceOutput<O> {
        return new ServiceOutput<O>(ServiceStatus.FAILURE, null, errorMessage);
    }

    public static unauthorized<O>(errorMessage: string): ServiceOutput<O> {
        return new ServiceOutput<O>(ServiceStatus.UNAUTHORIZED, null, errorMessage);
    }

    public static notFound<O>(errorMessage: string): ServiceOutput<O> {
        return new ServiceOutput<O>(ServiceStatus.NOT_FOUND, null, errorMessage);
    }

    public static validationError<O>(errorMessage: string): ServiceOutput<O> {
        return new ServiceOutput<O>(ServiceStatus.VALIDATION_ERROR, null, errorMessage);
    }

    public static conflict<O>(errorMessage: string): ServiceOutput<O> {
        return new ServiceOutput<O>(ServiceStatus.CONFLICT, null, errorMessage);
    }

    public static internalError<O>(errorMessage: string): ServiceOutput<O> {
        return new ServiceOutput<O>(ServiceStatus.INTERNAL_ERROR, null, errorMessage);
    }
}
