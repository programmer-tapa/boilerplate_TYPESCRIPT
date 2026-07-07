import { SERVICE_Abstract } from "../../../../../origin/entities/SERVICE_Abstract";
import { USECASE_Abstract } from "../../../../../origin/entities/USECASE_Abstract";
import { ServiceDependency } from "../../../../../origin/schemas/ServiceDependency";
import { INPUT_DivideTwoNumbers } from "../schemas/INPUT_DivideTwoNumbers";
import { OUTPUT_DivideTwoNumbers } from "../schemas/OUTPUT_DivideTwoNumbers";
import { INTERFACE_HELPER_DivideTwoNumbers } from "../interfaces/INTERFACE_HELPER_DivideTwoNumbers";
import { USECASE_DivideTwoNumbers } from "../usecases/USECASE_DivideTwoNumbers";

export class SERVICE_DivideTwoNumbers extends SERVICE_Abstract<INPUT_DivideTwoNumbers, OUTPUT_DivideTwoNumbers> {
    private static readonly SERVICE_NAME = "Calculator.DivideTwoNumbers";

    constructor(
        dependencies: ServiceDependency,
        private readonly helpers: Map<string, INTERFACE_HELPER_DivideTwoNumbers>
    ) {
        super(dependencies);
    }

    protected detectServiceName(): string {
        return SERVICE_DivideTwoNumbers.SERVICE_NAME;
    }

    protected build(input: INPUT_DivideTwoNumbers): USECASE_Abstract<INPUT_DivideTwoNumbers, OUTPUT_DivideTwoNumbers> {
        const helperKey = "CONTRACT_HELPER_DivideTwoNumbers";
        const usecaseHelper = this.helpers.get(helperKey);

        if (!usecaseHelper) {
            throw new Error(`Helper not found: ${helperKey}`);
        }

        return new USECASE_DivideTwoNumbers(usecaseHelper);
    }
}
