import { SERVICE_Abstract } from "../../../../../origin/entities/SERVICE_Abstract";
import { USECASE_Abstract } from "../../../../../origin/entities/USECASE_Abstract";
import { ServiceDependency } from "../../../../../origin/schemas/ServiceDependency";
import { INPUT_AddTwoNumbers } from "../schemas/INPUT_AddTwoNumbers";
import { OUTPUT_AddTwoNumbers } from "../schemas/OUTPUT_AddTwoNumbers";
import { INTERFACE_HELPER_AddTwoNumbers } from "../interfaces/INTERFACE_HELPER_AddTwoNumbers";
import { USECASE_AddTwoNumbers } from "../usecases/USECASE_AddTwoNumbers";

export class SERVICE_AddTwoNumbers extends SERVICE_Abstract<INPUT_AddTwoNumbers, OUTPUT_AddTwoNumbers> {
    private static readonly SERVICE_NAME = "Calculator.AddTwoNumbers";

    constructor(
        dependencies: ServiceDependency,
        private readonly helpers: Map<string, INTERFACE_HELPER_AddTwoNumbers>
    ) {
        super(dependencies);
    }

    protected detectServiceName(): string {
        return SERVICE_AddTwoNumbers.SERVICE_NAME;
    }

    protected build(input: INPUT_AddTwoNumbers): USECASE_Abstract<INPUT_AddTwoNumbers, OUTPUT_AddTwoNumbers> {
        const helperKey = "CONTRACT_HELPER_AddTwoNumbers";
        const usecaseHelper = this.helpers.get(helperKey);

        if (!usecaseHelper) {
            throw new Error(`Helper not found: ${helperKey}`);
        }

        return new USECASE_AddTwoNumbers(usecaseHelper);
    }
}
