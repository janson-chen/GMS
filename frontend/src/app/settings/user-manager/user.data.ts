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
