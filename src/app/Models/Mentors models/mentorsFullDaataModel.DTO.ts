import { ProfileDTO } from '../Profile models/profile.DTO';

export class MentorsFullDataModelDTO {
  data: ProfileDTO[] = [];
  message: string = '';
  status: boolean = false;
  url: string = '';
}
