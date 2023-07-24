export class UniversityDataDTO {
  id: number | undefined;
  name: string | undefined;
  country:
    | {
        id: number | undefined;
        name: string | undefined;
      }
    | undefined;
  lat: number | undefined;
  long: number | undefined;
  modifiedDate: number | undefined;
  link: string | undefined;
  active: boolean | undefined;
  weight: number | undefined;
  macunimaster: any | undefined;
  macuniphd: any | undefined;
  logo: string | undefined;
  admiChanceFlag: boolean | undefined;
  provinceId: string | undefined;
  googleId: string | undefined;
  info: string | undefined;
  cover: string | undefined;
  rank: number | undefined;
  department: any[] | undefined;
  admichance: string | undefined;
  summeries: string | undefined;
}

// export interface country {
//   id: number;
//   name: string;
// }
