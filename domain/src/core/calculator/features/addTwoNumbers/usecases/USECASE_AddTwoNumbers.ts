import { USECASE_Abstract } from "../../../../../origin/entities/USECASE_Abstract";
import { INPUT_AddTwoNumbers } from "../schemas/INPUT_AddTwoNumbers";
import { OUTPUT_AddTwoNumbers } from "../schemas/OUTPUT_AddTwoNumbers";
import { INTERFACE_HELPER_AddTwoNumbers } from "../interfaces/INTERFACE_HELPER_AddTwoNumbers";
import { NegativeNumberException } from "../exceptions/NegativeNumberException";

export class USECASE_AddTwoNumbers extends USECASE_Abstract<INPUT_AddTwoNumbers, OUTPUT_AddTwoNumbers> {
    constructor(private readonly helper: INTERFACE_HELPER_AddTwoNumbers) {
        super();
    }

    public execute(input: INPUT_AddTwoNumbers): OUTPUT_AddTwoNumbers {
        if (input.a < 0) {
            throw new NegativeNumberException(input.a);
        }
        if (input.b < 0) {
            throw new NegativeNumberException(input.b);
        }
        const result = input.a + input.b;
        this.helper.printHello();
        return { result };
    }
}
