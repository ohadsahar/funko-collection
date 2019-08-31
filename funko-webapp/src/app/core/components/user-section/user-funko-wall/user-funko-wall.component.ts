import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import { PostInterface } from 'src/app/shared/interfaces/post.interface';
import { FontInterface } from '../../../../shared/interfaces/font.interface';

@Component({
  selector: 'app-user-funko-wall',
  templateUrl: './user-funko-wall.component.html',
  styleUrls: ['./user-funko-wall.component.scss']
})
export class UserFunkoWallComponent implements OnInit {
  userData = new PostInterface('', '', '', '', '', '', '');
  selectedFont: string;
  fonts: FontInterface[] = [{ value: '10px' }, { value: '12px' },
  { value: '14px' }, { value: '16px' }, { value: '18px' },
  { value: '20px' }];
  constructor(private shareDataService: ShareDataService, private ngZone: NgZone) {
    this.selectedFont = '16px';
  }
  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;
  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.shareDataService.currentUser.subscribe(response => {
      this.assignVariables(response);
    });
  }
  assignVariables(response): void {
    this.userData.firstname = response.firstname;
    this.userData.lastname = response.lastname;
    this.userData.miniImage = response.miniImage as any;
    this.userData.yearOfStartCollection = response.yearOfStartCollection;
    this.userData.email = response.email;
  }
  registerPost(form: NgForm) {
    if (form.invalid) { return; }
    this.userData.textPost = form.value.textPost;
    this.userData.fontSize = this.selectedFont;
  }
  triggerResize() {
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
