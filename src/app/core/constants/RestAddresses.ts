export class RestAddresses {
  static readonly baseUrl = 'https://api.applyChance.com/api/';
  // Login
  static readonly LOGIN = this.baseUrl + 'Auth';
  // University
  static readonly UNIVERSITY = this.baseUrl + 'University';
  static readonly GET_UNIVERSITY_DETAILS = this.baseUrl + 'University/Detail';
  // users
  static readonly GET_USER = this.UNIVERSITY + '/Users';
}
