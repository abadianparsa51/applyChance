import { ApplicationDTO } from '../Professors models/application.DTO';
import { ProfileDTO } from '../Profile models/profile.DTO';

export class PositionModelDTO {
  applicants: number = 0;
  applications: ApplicationDTO[] = [];
  createdDate: string = '';
  deadline: string = '';
  id: number = 0;
  inComplete: number = 0;
  invited: number = 0;
  isPromote: boolean = false;
  link: string = '';
  new: number = 0;
  profile: ProfileDTO | undefined;
  reject: number = 0;
  shortList: number = 0;
  status: string = '';
  title: string = '';
  university: string = '';
}
