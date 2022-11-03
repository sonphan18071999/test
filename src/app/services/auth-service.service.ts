import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {
  constructor() {}

  getAuthToken(): string | undefined {
    let token = localStorage.getItem('token');
    return token ? token : undefined;
  }
}
