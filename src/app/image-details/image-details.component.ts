import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  constructor(private imageService:ImageService,
    private route:ActivatedRoute
    ) { }
    
  image:any   

  ngOnInit()
  {    
    this.image=this.imageService.getImage(this.route.snapshot.params['id']);
  }    

}
