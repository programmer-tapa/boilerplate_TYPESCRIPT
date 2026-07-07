export class ErrorResponse {
    public readonly status: string = "error";
    constructor(
        public readonly message: string,
        public readonly errorCode: string | null = null
    ) {}
}
