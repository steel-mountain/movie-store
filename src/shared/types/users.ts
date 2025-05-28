export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<IUserRegister, "name">;
