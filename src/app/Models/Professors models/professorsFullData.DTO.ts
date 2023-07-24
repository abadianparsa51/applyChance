import { ProfileDTO } from '../Profile models/profile.DTO';
import { ProfessorsDataDTO } from './professorData.STO';

export class ProfessorsFullDataDTO {
  data: ProfileDTO[] = [];
  message: string | undefined;
  status: boolean | undefined;
  url: string | undefined;
}
