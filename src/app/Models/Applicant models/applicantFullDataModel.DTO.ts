import { applicantsDTO } from './applicantModel.DTO';

export class ApplicantFullDataDTO {
  data: applicantsDTO[] = [];
  message: string = '';
  status: boolean = false;
  url: string = '';
}
