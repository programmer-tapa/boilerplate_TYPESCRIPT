import { USECASE_Abstract } from "../../../../../origin/entities/USECASE_Abstract";
import { INPUT_DivideTwoNumbers } from "../schemas/INPUT_DivideTwoNumbers";
import { OUTPUT_DivideTwoNumbers } from "../schemas/OUTPUT_DivideTwoNumbers";
import { INTERFACE_HELPER_DivideTwoNumbers } from "../interfaces/INTERFACE_HELPER_DivideTwoNumbers";
import { DivisionByZeroException } from "../exceptions/DivisionByZeroException";

export class USECASE_DivideTwoNumbers extends USECASE_Abstract<INPUT_DivideTwoNumbers, OUTPUT_DivideTwoNumbers> {
    constructor(private readonly helper: INTERFACE_HELPER_DivideTwoNumbers) {
        super();
    }

    public execute(input: INPUT_DivideTwoNumbers): OUTPUT_DivideTwoNumbers {
        if (input.b === 0) {
            throw new DivisionByZeroException();
        }
        const result = input.a / input.b;
        this.helper.logDivision(input.a, input.b, result);
        return { result };
    }
}
