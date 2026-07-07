export abstract class USECASE_Abstract<I, O> {
    public abstract execute(input: I): O;
}
