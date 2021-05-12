import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  

  getAlbum(){

  }

}
