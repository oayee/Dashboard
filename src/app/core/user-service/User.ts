export const Roles = {
  ADMIN: 0
};

export class User {
  role: number = Roles.ADMIN;
  nickname: string;
}
