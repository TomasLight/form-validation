# Installation

```bush
npm install model-state-validation
```
 
# How to use

Define your validator
```ts
import { IValidator, ModelState } from "model-state-validation";
import { LoginModel } from "./LoginModel";

export class LoginValidator implements IValidator<LoginModel> {
    public validate(model: LoginModel): ModelState {
        const modelState = new ModelState();

        if (!this.usernameIsValid(model.username)) {
            modelState.addError(
                nameof<LoginModel>((o) => o.username),
                "Login is invalid."
            );
        }

        if (!this.passwordIsValid(model.password)) {
            modelState.addError(
                nameof<LoginModel>((o) => o.password),
                "Password is invalid."
            );
        }

        return modelState;
    }

    public usernameIsValid(username: any): boolean {
        return typeof username === "string" && username.length > 0;
    }

    public passwordIsValid(password: any): boolean {
        const regexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);
        return password && regexp.test(password);
    }
}
```

And validate your model somewhere
```ts
import { ModelState } from "model-state-validation";
import { LoginModel } from "./LoginModel";
import { LoginModelValidator } from "./LoginModelValidator";

export class Somewhere {
    public doSomething(myLoginModel: LoginModel) {
        const validator = new LoginModelValidator();
        const modelState: ModelState = validator.validate(myLoginModel);

        if (modelState.isInvalid()) {
            console.log(modelState.getErrors());
            return;
        }
    }
}
```
