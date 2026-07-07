import { Request, Response } from "express";
import {
    DefaultLoggerService,
    CONTRACT_UsecaseAuthorizationService,
    CONTRACT_HELPER_AddTwoNumbers,
    CONTRACT_HELPER_DivideTwoNumbers,
    ServiceDependency,
    User,
    SERVICE_AddTwoNumbers,
    SERVICE_DivideTwoNumbers
} from "@my-app/domain";
import { ControllerServiceExecutor } from "../../helpers/ControllerServiceExecutor";

export class CalculatorController {
    private readonly executor: ControllerServiceExecutor;
    private readonly addService: SERVICE_AddTwoNumbers;
    private readonly divideService: SERVICE_DivideTwoNumbers;

    constructor() {
        this.executor = new ControllerServiceExecutor();

        const logger = new DefaultLoggerService();
        logger.setCorrelationId("req_" + Math.random().toString(36).substring(2, 11));

        const authService = new CONTRACT_UsecaseAuthorizationService();
        const dependencies = new ServiceDependency(authService);

        const addHelper = new CONTRACT_HELPER_AddTwoNumbers(logger);
        const addHelpersMap = new Map();
        addHelpersMap.set("CONTRACT_HELPER_AddTwoNumbers", addHelper);

        const divideHelper = new CONTRACT_HELPER_DivideTwoNumbers();
        const divideHelpersMap = new Map();
        divideHelpersMap.set("CONTRACT_HELPER_DivideTwoNumbers", divideHelper);

        this.addService = new SERVICE_AddTwoNumbers(dependencies, addHelpersMap);
        this.divideService = new SERVICE_DivideTwoNumbers(dependencies, divideHelpersMap);
    }

    public add = (req: Request, res: Response): void => {
        const { a, b } = req.body;

        if (a === undefined || b === undefined) {
            res.status(400).json({
                status: "error",
                message: "Inputs a and b are required",
                errorCode: "400"
            });
            return;
        }

        const user: User = { id: "user-123", email: "cosmos@example.com", role: "USER" };
        const inputData = { a: Number(a), b: Number(b) };
        const serviceInput = { user, data: inputData };

        const result = this.addService.run(serviceInput);
        this.executor.execute(res, result, "Addition failed");
    };

    public divide = (req: Request, res: Response): void => {
        const { a, b } = req.body;

        if (a === undefined || b === undefined) {
            res.status(400).json({
                status: "error",
                message: "Inputs a and b are required",
                errorCode: "400"
            });
            return;
        }

        const user: User = { id: "user-123", email: "cosmos@example.com", role: "USER" };
        const inputData = { a: Number(a), b: Number(b) };
        const serviceInput = { user, data: inputData };

        const result = this.divideService.run(serviceInput);
        this.executor.execute(res, result, "Division failed");
    };
}
