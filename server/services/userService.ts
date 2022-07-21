import { IUser } from "../../types/IUser";
import { RegistationRequest } from "../../types/IRegistration";
import { validate } from "./validator";
import { FormValidation } from "../../types/FormValidation";

export async function validateUser(
  data: RegistationRequest
): Promise<FormValidation> {
  const errors = await validate(data);

  if (errors.size > 0) {
    return { hasErrors: true, errors };
  }

  return { hasErrors: false };
}

export function sanitizeUserForFrontend(user: IUser | undefined): IUser {
  if (!user) {
    return user;
  }

  delete user.password;
  delete user.loginType;
  delete user.stripeCustomerId;

  return user;
}

type ExistsCheck = {
  value: boolean;
  message?: string;
};

type RegistrationErrors = {
  emailError?: string;
  usernameError?: string;
};

export async function doesUserExist(
  email: string,
  username: string
): Promise<ExistsCheck> {
  const emailExists = true;
  const userNameExists = true;

  const errors: RegistrationErrors = {};

  if (emailExists) {
    errors.emailError = `This email, ${email}, is already registered!`;
  }

  if (userNameExists) {
    errors.usernameError = `This username, ${username}, is already registered!`;
  }


  return 
}
