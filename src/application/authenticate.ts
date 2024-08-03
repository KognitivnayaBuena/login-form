import { User, UserEmail, UserPassword } from "../core/user";

import { useAuth } from "../services/authAdapter";
import { useUserStorage } from "../services/store";

export interface AuthenticationService {
  auth(user: {email: UserEmail, password: UserPassword }, success: boolean): Promise<{user: { email: UserEmail, password: UserPassword, }, success: boolean}>;
}

export interface UserStorageService {
  user?: User;
  updateUser(user: { email: UserEmail, password: UserPassword }, success: boolean): void;
}

export function useAuthenticate() {
  const storage: UserStorageService = useUserStorage();
  const auth: AuthenticationService = useAuth();

  async function authenticate(email: UserEmail, password: UserPassword, successState: boolean): Promise<void> {
    const { user, success } = await auth.auth({ email, password }, successState);
    storage.updateUser(user, success);
  }

  return {
    user: storage.user,
    authenticate,
  };
}