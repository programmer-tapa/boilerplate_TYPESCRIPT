import { AppException } from "../../../../../origin/exceptions/AppException";
import { ServiceStatus } from "../../../../../origin/schemas/ServiceStatus";

export class NegativeNumberException extends AppException {
    constructor(number: number) {
        super(ServiceStatus.VALIDATION_ERROR, `Number cannot be negative: ${number}`);
    }
}
