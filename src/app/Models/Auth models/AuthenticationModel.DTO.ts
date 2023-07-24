import { refreshTokenModelDTO } from './tokenModel.DTO';
export class AuthenticationModel {
  avatar: string | undefined;
  balance: number | undefined;
  country: { name: null; id: null } | undefined;
  email: string | undefined;
  expiration: string | undefined;
  fullName: string | undefined;
  id: string | undefined;
  isFreeze: boolean | undefined;
  isLimited: boolean | undefined;
  referFlag: boolean | undefined;
  role: any[] | undefined;
  token: string | undefined;
  refreshToken: refreshTokenModelDTO | undefined;
}
