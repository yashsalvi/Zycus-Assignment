import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotoModel } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/service/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: any ;
  albumId: any;
  filteredPhotos: any;

  photosal: any;
  photosAll!: PhotoModel[];
  constructor(private photosService: PhotosService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

    getPhotos(): void{
      this.photosService.getPhotos()
        .subscribe(
          photosal => this.photosAll = photosal,
          err => console.error('got an error: ' + err),
          )
    }
  
    ngOnInit() {
      this.getPhotos()
      this.fetchData()
    }
  
    private fetchData() {
      this.spinner.show();
      this.albumId = this.route.snapshot.params.albumId;
      const promise = this.photosService.getPhotosId(this.albumId);
      promise.then((data) => {
        this.photos = data;
        this.filteredPhotos = this.photos;
      }).catch((error:any) => {
        console.log(JSON.stringify(error));
      }).finally(() => {
        this.spinner.hide();
      });
    }
}
