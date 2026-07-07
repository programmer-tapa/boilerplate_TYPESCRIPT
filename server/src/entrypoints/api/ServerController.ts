import { Request, Response } from "express";
import { DomainService } from "@my-app/domain";

export class ServerController {
    private readonly domainService = new DomainService();

    public sayHello = (req: Request, res: Response): void => {
        const message = "API says: " + this.domainService.getDomainMessage();
        res.send(message);
    };
}
