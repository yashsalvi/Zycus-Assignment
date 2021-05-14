
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotoModel } from 'src/app/models/photo.model';
import { User } from 'src/app/models/User';

// import { Ialbum } from 'src/app/models/ialbum';
import { AlbumsService } from 'src/app/service/albums.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  photos!: PhotoModel[];
  users!: User[];

  filteredAlbums: any;
  albums:any;

  
  constructor(
    private albumsService: AlbumsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    // this.getAlbums()
    // this.getPosts()
    this.fetchData()
  }
  

  filterAlbums(searchString: string) {
    return this.albums.filter((album: { title: string; }) =>
      album.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  private fetchData() {
    this.spinner.show();
    const promise = this.albumsService.getAlbums();
    promise.then((data) => {
      this.albums = data;
      this.filteredAlbums = this.albums;
    }).catch((error) => {
      console.log(JSON.stringify(error));
    }).finally(() => {
      this.spinner.hide();
    });
  }

  setUserName() {
    if (this.photos && this.users) {
      for(const photo of this.photos) {
        for(const user of this.users) {
          for(const album of this.albums) {
          if (photo.albumId === user.id) {
            photo.albumId = album.id
            }
          }
        }
      }
    }
  }

    // albums : Ialbum[] = <Ialbum[]>[];                 
    // constructor(private service : AlbumsService){  
  
    // }
   
    // ngOnInit(){                                        
    //   this.service.getAlbums().subscribe((resp)=>{     
    //     this.albums = resp;                            
    //   });                                             
    // }                                           
}



