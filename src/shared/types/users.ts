export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<UserRegister, "name">;
