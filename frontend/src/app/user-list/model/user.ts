export interface User {
  id:number;
  name:string;
  first:string;
  last:string;
  email:string;
  phone:string;
  hometown:string;
  division:string;
  password:string;
  friendList:Set<number>;
}
