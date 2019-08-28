import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegisterInterface } from '../../shared/interfaces/register.interface';


@Injectable({ providedIn: 'root' })
export class ShareDataService {

  private passCurrentView = new BehaviorSubject<string>(null);
  private passCurrentUser = new BehaviorSubject<RegisterInterface>(null);
  currentUser = this.passCurrentUser.asObservable();
  currentView = this.passCurrentView.asObservable();


  changeUser(user: RegisterInterface) {
    this.passCurrentUser.next(user);
  }
  changeView(value: string) {
    this.passCurrentView.next(value);
  }
}
