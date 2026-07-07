import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../helpers/ErrorResponse";

export function RouteErrorHandlerMiddleware(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const routePath = req.path;
    const errorMessage = `Error at route - ${routePath} : ${err.message || String(err)}`;
    console.error(errorMessage);
    if (err.stack) {
        console.error(err.stack);
    }

    const genericMessage = "An unexpected error occurred on the server.";
    const errorResponse = new ErrorResponse(genericMessage, "500");
    res.status(500).json(errorResponse);
}
