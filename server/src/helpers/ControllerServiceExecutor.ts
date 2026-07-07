import { Response } from "express";
import { ServiceOutput, ServiceStatus } from "@my-app/domain";
import { ApiResponse } from "./ApiResponse";
import { ErrorResponse } from "./ErrorResponse";

export class ControllerServiceExecutor {
    public execute<O>(
        res: Response,
        output: ServiceOutput<O>,
        defaultErrorMsg: string = "An error occurred."
    ): Response {
        const httpStatus = this.mapStatus(output.status);

        if (output.status === ServiceStatus.SUCCESS) {
            const apiResponse = new ApiResponse<O>(output.data!);
            return res.status(httpStatus).json(apiResponse);
        }

        let errorMessage = output.errorMessage || defaultErrorMsg;
        if (httpStatus === 500) {
            errorMessage = "An unexpected error occurred on the server.";
        }

        const errorResponse = new ErrorResponse(errorMessage, String(httpStatus));
        return res.status(httpStatus).json(errorResponse);
    }

    private mapStatus(status: ServiceStatus): number {
        switch (status) {
            case ServiceStatus.SUCCESS:
                return 200;
            case ServiceStatus.UNAUTHORIZED:
                return 403;
            case ServiceStatus.NOT_FOUND:
                return 404;
            case ServiceStatus.VALIDATION_ERROR:
                return 400;
            case ServiceStatus.CONFLICT:
                return 409;
            case ServiceStatus.FAILURE:
                return 400;
            case ServiceStatus.INTERNAL_ERROR:
                return 500;
            default:
                return 500;
        }
    }
}
