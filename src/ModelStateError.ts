import { IModelStateError } from './IModelStateError';

export class ModelStateError implements IModelStateError {
  public readonly name: string;
  public error: string | object;

  constructor(error: string | object = '') {
    this.name = 'common-error';
    this.error = error;
  }
}
