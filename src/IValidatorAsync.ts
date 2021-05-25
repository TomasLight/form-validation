import { ModelState } from './ModelState';

export interface IValidatorAsync<TModel> {
  validateAsync: (model: TModel) => Promise<ModelState>;
}
