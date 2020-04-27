import { IModelStateError } from "./IModelStateError";

export class Errors {
    public addStateError(stateError: IModelStateError) {
        if (!this.containsField(stateError.name)) {
            this.addField(stateError.name, stateError.error);
        }
    }

    private containsField(fieldName: string): boolean {
        // @ts-ignore
        return typeof this[fieldName] !== undefined;
    }

    private addField(fieldName: string, value: string | object): void {
        // @ts-ignore
        this[fieldName] = value;
    }
}
