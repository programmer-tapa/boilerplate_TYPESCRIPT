import { DomainService } from "@my-app/domain";

console.log("Starting Worker Application...");
const domainService = new DomainService();
console.log(`Worker context: ${domainService.getDomainMessage()}`);
