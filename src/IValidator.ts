import { ModelState } from './ModelState';

export interface IValidator<TModel> {
  validate: (model: TModel) => ModelState;
}
