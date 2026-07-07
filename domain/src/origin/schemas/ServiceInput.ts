import { User } from "./User";

export interface ServiceInput<I> {
    user: User;
    data: I;
}
