import { Organization } from './organization';

export class Member {
  _id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  //admin: boolean;
  organization: Organization;
  subject: string;
  city: string;
  address: string;
  postCode: string;
  managerName: string;
  phoneNum: string;
  mobileNum: string;
}