export interface User {
  id: number;
  first: string;
  last: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  hometown: string;
  division: string;
  friendList: Set<number>;
}
