import { AppException } from "../../../../../origin/exceptions/AppException";
import { ServiceStatus } from "../../../../../origin/schemas/ServiceStatus";

export class DivisionByZeroException extends AppException {
    constructor() {
        super(ServiceStatus.VALIDATION_ERROR, "Division by zero is not allowed");
    }
}
