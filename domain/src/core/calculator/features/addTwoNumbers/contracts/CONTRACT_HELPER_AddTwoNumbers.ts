import { INTERFACE_HELPER_AddTwoNumbers } from "../interfaces/INTERFACE_HELPER_AddTwoNumbers";
import { LoggerService } from "../../../../../infra/logger/interfaces/LoggerService";

export class CONTRACT_HELPER_AddTwoNumbers implements INTERFACE_HELPER_AddTwoNumbers {
    constructor(private readonly loggerService: LoggerService) {}

    public printHello(): void {
        console.log("Hello from CONTRACT_HELPER_AddTwoNumbers!");
        this.loggerService.info("Executed printHello in CONTRACT_HELPER_AddTwoNumbers");
        this.loggerService.debug("Debug: printHello method was called.");
        this.loggerService.warn("Warning: This is just a demo log from printHello.");
        this.loggerService.error("Info: printHello execution completed.");
        this.loggerService.critical("some critical message");
    }
}
