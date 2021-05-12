import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ialbum } from '../models/ialbum';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http : HttpClient) { }

  
  getAlbums(): Observable<Ialbum[]>{                  
    return this.http.get<Ialbum[]>("https://jsonplaceholder.typicode.com/albums"); 
  }       
  




  // private AlbumUrl = 'api/User';
  // album = new EventEmitter<>();


  // getList() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/albums');
  // }
  // getListByUser(userId): Observable<Album[]> {
  //   return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/?userId=' + userId);
  // }
  // getDetail(albumId) {
  //   return this.http.get('https://jsonplaceholder.typicode.com/albums/' + albumId);
  // }
  // getPhotoByAlbum(albumId): Observable<Photo[]> {
  //   return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
  // }

  // set(album) {
  //   console.log(album);

  // }
// }


}
