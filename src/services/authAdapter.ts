import { UserEmail, UserPassword } from "../core/user";

import { AuthenticationService } from "../application/authenticate";
import { fakeApi } from "./api";

export function useAuth(): AuthenticationService {
  return {
    auth(user: { email: UserEmail, password: UserPassword }, success: boolean) {
      return fakeApi({
        user: {
          email: user.email,
          password: user.password,
        },
        success,
      });
    },
  };
}