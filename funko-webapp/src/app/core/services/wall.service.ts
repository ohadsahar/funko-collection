import { Injectable } from '@angular/core';
import { PostInterface } from '../../shared/interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const backendUrl = environment.backendUrlWall;

@Injectable({ providedIn: 'root' })
export class WallService {

  constructor(private http: HttpClient) { }
  registerPost(postData: PostInterface) {
    return this.http.post<{ message: PostInterface }>(`${backendUrl}/create-post`, postData);
  }
  getPosts() {
    return this.http.get<{ message: PostInterface[] }>(`${backendUrl}/get-posts`);
  }
}
