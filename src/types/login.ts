export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginStore {
  token: string;
  userInfo: any;
}
