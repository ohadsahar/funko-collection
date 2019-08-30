import { Component, OnInit } from '@angular/core';
import { UserProfileDataService } from '../../../services/user-profile-data.service';
import { UserImages } from 'src/app/shared/interfaces/user-images.interface';

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
  constructor(private userProfileDataService: UserProfileDataService) { }

  ngOnInit() {
    this.userProfileDataService.getAllImages().subscribe(response => {
      response.message.forEach(element => {
        element.forEach(image => {
          this.imagesArray.push(image);
        });
      });
    });
  }
  uploadImage() {
    let i;
    for (i = 0; i <= this.filesToUpload.length; i++) {
      if (i >= this.filesToUpload.length) {
        this.userProfileDataService.uploadUserImagesCollection(this.collectionFormData).subscribe(response => {
          console.log(response);
        })
      } else {
        this.collectionFormData.append('files[]', this.filesToUpload[i], this.filesToUpload[i].name);
      }
    }
  }
  fileChangeEvent(fileInput: any): void {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }
}
