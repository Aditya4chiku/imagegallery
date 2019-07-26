import { Component,OnInit,OnChanges } from '@angular/core';
import { ImageService } from '../image.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

images:any[];
filterBy?:string='all'
allImages:any[] =[];
id:string;

logOut()
{
console.log("logOut");
this.authService.logOut();
this.route.navigate(['/login']);
}


ngOnInit() 
{
  this.id=localStorage.getItem('token');
}

       constructor(private imageService:ImageService,private authService:AuthService,private route:Router)
       {
          this.allImages=this.imageService.getImages();
       }


ngOnChanges()
     {    
          this.allImages = this.imageService.getImages();    
     }  

}
