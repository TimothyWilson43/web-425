import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  getUser(): User {
    return new User(0, 'Dave', 'Wilson', '100 Fake Lane Road, Bellevue, NE 68123');
  }
}



