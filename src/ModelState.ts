import { ModelStateError } from "./ModelStateError";
import { Errors } from "./Errors";
import { IModelState } from "./IModelState";
import { IModelStateError } from "./IModelStateError";

export class ModelState implements IModelState {
    private modelStateErrors: IModelStateError[] = [];

    public commonError?: ModelStateError;

    public addError(propertyName: string, errorMessage: string): void {
        this.modelStateErrors.push({
            name: propertyName,
            error: errorMessage,
        });
    }

    public addModelState(modelState: ModelState): this {
        this.modelStateErrors = [
            ...this.modelStateErrors,
            ...modelState.modelStateErrors,
        ];
        return this;
    }

    public isValid(): boolean {
        return !this.commonError && this.modelStateErrors.length === 0;
    }

    public isInvalid(): boolean {
        return !!(this.commonError || this.modelStateErrors.length > 0);
    }

    public getErrors(): Errors {
        const errors = new Errors();
        this.modelStateErrors.forEach((stateError: IModelStateError) => {
            errors.addStateError(stateError);
        });

        return errors;
    }
}
