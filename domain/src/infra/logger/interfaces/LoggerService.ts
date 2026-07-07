export interface LoggerService {
    debug(message: string, context?: Record<string, any>): void;
    info(message: string, context?: Record<string, any>): void;
    warn(message: string, context?: Record<string, any>): void;
    error(message: string, exception?: Error, context?: Record<string, any>): void;
    critical(message: string, exception?: Error, context?: Record<string, any>): void;
    setCorrelationId(correlationId: string): void;
    getCorrelationId(): string;
    addContext(key: string, value: any): void;
    removeContext(key: string): void;
    clearContext(): void;
    logPerformance(operationName: string, executionTimeMs: number, success: boolean, context?: Record<string, any>): void;
    logAudit(action: string, userId: string, resource: string, details?: Record<string, any>): void;
}
