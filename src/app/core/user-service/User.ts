export const Roles = {
  ADMIN: 0
};

export class User {
  surname: string;
  name: string;
  lastname: string;
  role: number = Roles.ADMIN;
  nickname: string;
  password: string;
}
