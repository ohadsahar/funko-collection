import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import { PostInterface } from 'src/app/shared/interfaces/post.interface';
import { WallService } from 'src/app/core/services/wall.service';

@Component({
  selector: 'app-user-funko-wall',
  templateUrl: './user-funko-wall.component.html',
  styleUrls: ['./user-funko-wall.component.scss']
})
export class UserFunkoWallComponent implements OnInit {
  userData = new PostInterface('', '', '', '', '', '');
  posts: PostInterface[];
  constructor(private shareDataService: ShareDataService, private wallService: WallService) {
    this.posts = [];
  }
  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;
  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent() {
    this.shareDataService.currentUser.subscribe(response => {
      this.assignVariables(response);
      this.wallService.getPosts().subscribe(data => {
        this.posts = data.message;
      });
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
    this.wallService.registerPost(this.userData).subscribe(response => {
      this.posts.push(response.message);
    });
  }
}
