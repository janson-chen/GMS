export class QueryOption {
  pageNo: number = 1;
  category: string;

  constructor(options: any) {
    Object.assign(this, options);
  }
}


export interface LoginData {
  userName: string;
  passwordHash: string;
  rememberMe: boolean;
}

export interface UserInfo {
  id: string;
  userName: string;
  name: string;
  email: string;
  phoneNumber: string;
  communityID: string;
  isEnabled: boolean;
  isLockedOut: boolean;
  roles: string[];
  createdBy: string;
  updatedBy: string;
  createdDate: string;
  updatedDate: string;
}
