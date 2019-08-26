import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegisterInterface } from '../../shared/interfaces/register.interface';


@Injectable({ providedIn: 'root' })
export class ShareDataService {

  private passCurrentUser = new BehaviorSubject<RegisterInterface>(null);
  currentUser = this.passCurrentUser.asObservable();

  changeUser(user: RegisterInterface) {
    this.passCurrentUser.next(user);
  }
}
