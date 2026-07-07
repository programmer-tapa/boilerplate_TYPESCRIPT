import { Request, Response, NextFunction } from "express";

export function DebuggerMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("MIDDLEWARE : debugger");
    next();
}
