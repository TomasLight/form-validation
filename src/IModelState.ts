import { ModelStateError } from "./ModelStateError";
import { Errors } from "./Errors";

export interface IModelState {
    commonError?: ModelStateError;

    addError(propertyName: string, errorMessage: string): void;
    addModelState(modelState: IModelState): IModelState;

    isValid(): boolean;
    isInvalid(): boolean;
    getErrors(): Errors;
}
