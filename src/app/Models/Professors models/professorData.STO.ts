import { ProfileDTO } from '../Profile models/profile.DTO';
import { ApplicationDTO } from './application.DTO';

export class ProfessorsDataDTO {
  applicants: number | undefined;
  applications: [ApplicationDTO] | undefined;
  createdDate: string | undefined;
  deadline: string | undefined;
  id: number | undefined;
  inComplete: number | undefined;
  invited: number | undefined;
  isPromote: boolean | undefined;
  link: string | undefined;
  new: number | undefined;
  profile: ProfileDTO | undefined;
  reject: number | undefined;
  shortList: number | undefined;
  status: string | undefined;
  title: string | undefined;
  university: string | undefined;
}
