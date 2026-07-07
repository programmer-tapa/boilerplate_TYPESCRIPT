import { LoggerService } from "../interfaces/LoggerService";

export class DefaultLoggerService implements LoggerService {
    private correlationId: string = "";
    private context: Record<string, any> = {};

    public debug(message: string, context?: Record<string, any>): void {
        console.debug(`[DEBUG] [Corr: ${this.correlationId}] ${message}`, { ...this.context, ...context });
    }

    public info(message: string, context?: Record<string, any>): void {
        console.info(`[INFO] [Corr: ${this.correlationId}] ${message}`, { ...this.context, ...context });
    }

    public warn(message: string, context?: Record<string, any>): void {
        console.warn(`[WARN] [Corr: ${this.correlationId}] ${message}`, { ...this.context, ...context });
    }

    public error(message: string, exception?: Error, context?: Record<string, any>): void {
        console.error(`[ERROR] [Corr: ${this.correlationId}] ${message}`, exception, { ...this.context, ...context });
    }

    public critical(message: string, exception?: Error, context?: Record<string, any>): void {
        console.error(`[CRITICAL] [Corr: ${this.correlationId}] ${message}`, exception, { ...this.context, ...context });
    }

    public setCorrelationId(correlationId: string): void {
        this.correlationId = correlationId;
    }

    public getCorrelationId(): string {
        return this.correlationId;
    }

    public addContext(key: string, value: any): void {
        this.context[key] = value;
    }

    public removeContext(key: string): void {
        delete this.context[key];
    }

    public clearContext(): void {
        this.context = {};
    }

    public logPerformance(operationName: string, executionTimeMs: number, success: boolean, context?: Record<string, any>): void {
        console.log(`[PERF] ${operationName} took ${executionTimeMs}ms (Success: ${success})`, { ...this.context, ...context });
    }

    public logAudit(action: string, userId: string, resource: string, details?: Record<string, any>): void {
        console.log(`[AUDIT] User ${userId} performed ${action} on ${resource}`, { ...this.context, ...details });
    }
}
