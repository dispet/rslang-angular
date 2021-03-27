import {EventEmitter, Injectable} from '@angular/core';

import {IUser} from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  updateUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  public setUser(user: IUser) {
    this.updateUser.emit(user);
  }
}
