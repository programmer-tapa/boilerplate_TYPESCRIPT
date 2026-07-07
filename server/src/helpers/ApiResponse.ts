export class ApiResponse<T> {
    public readonly status: string = "success";
    constructor(
        public readonly data: T,
        public readonly message: string | null = null,
        public readonly errorCode: string | null = null
    ) {}
}
