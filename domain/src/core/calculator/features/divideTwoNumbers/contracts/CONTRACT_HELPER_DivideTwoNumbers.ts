import { INTERFACE_HELPER_DivideTwoNumbers } from "../interfaces/INTERFACE_HELPER_DivideTwoNumbers";

export class CONTRACT_HELPER_DivideTwoNumbers implements INTERFACE_HELPER_DivideTwoNumbers {
    public logDivision(a: number, b: number, result: number): void {
        console.log(`Logging division: ${a} / ${b} = ${result}`);
    }
}
