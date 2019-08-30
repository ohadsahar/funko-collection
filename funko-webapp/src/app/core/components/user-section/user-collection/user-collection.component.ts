import { Component, OnInit } from '@angular/core';
import { PaginatorModel } from '../../../../shared/interfaces/paginator.interface';
import { UserProfileDataService } from '../../../services/user-profile-data.service';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss']
})
export class UserCollectionComponent implements OnInit {
  filesToUpload: Array<File> = [];
  imagePreview: string;
  collectionFormData = new FormData();
  imagesArray: Array<any> = [];
  counter: number;
  paginatorData = new PaginatorModel(0, 0);
  constructor(private userProfileDataService: UserProfileDataService) {
    this.paginatorData.skip = 0;
    this.paginatorData.limit = 5;
  }

  ngOnInit() {
    this.loadImages();
  }
  loadImages() {
    this.userProfileDataService.getAllImages(this.paginatorData).subscribe(response => {
      this.counter = response.message.count;
      this.imagesArray = response.message.images;
    });
  }
  uploadImage() {
    let i;
    for (i = 0; i <= this.filesToUpload.length; i++) {
      if (i >= this.filesToUpload.length) {
        this.userProfileDataService.uploadUserImagesCollection(this.collectionFormData).subscribe(response => {
          this.collectionFormData = new FormData();
          console.log(response.message);
          response.message.forEach(element => {
            this.imagesArray.push(element);
          });
        });
      } else {
        this.collectionFormData.append('files[]', this.filesToUpload[i], this.filesToUpload[i].name);
      }
    }
  }
  fileChangeEvent(fileInput: any): void {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }
  loadMore() {
    this.paginatorData.limit += 5;
    this.paginatorData.skip += 5;
    if (this.counter < this.paginatorData.limit) {
      this.paginatorData.limit = this.counter;
      this.paginatorData.skip = this.counter - this.paginatorData.skip;
    }
    this.loadImages();
  }
}