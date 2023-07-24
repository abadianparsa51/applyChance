import { PositionModelDTO } from './positionModelDTO';

export class PositionFullDataDTO {
  data: PositionModelDTO[] = [];
  message: string | undefined;
  status: boolean | undefined;
  url: string | undefined;
}
