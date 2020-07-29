import { IModelStateError } from "./IModelStateError";

export class Errors {
    [property: string]: any;

    public addStateError(stateError: IModelStateError) {
        if (!this.containsField(stateError.name)) {
            this.addField(stateError.name, stateError.error);
        }
    }

    private containsField(fieldName: string): boolean {
        return typeof this[fieldName] !== "undefined";
    }

    private addField(fieldName: string, value: string | object): void {
        this[fieldName] = value;
    }
}
