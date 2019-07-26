import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
    { "id": 1, "brand": "Apple", "url": "assets/Images/Macbook1.jpg" },    
    { "id": 2, "brand": "Apple", "url": "assets/Images/MacBook.jpg" },    
    { "id": 3, "brand": "Apple", "url": "assets/Images/laptop3.jpg" },    
    { "id": 4, "brand": "Apple", "url": "assets/Images/laptop4.jpg" },    
    { "id": 5, "brand": "hp", "url": "assets/Images/hp1.jpg" },    
    { "id": 6, "brand": "hp", "url": "assets/Images/hp2.jpg" },    
    { "id": 7, "brand": "hp", "url": "assets/Images/hp3.jpg" },    
    { "id": 8, "brand": "hp", "url": "assets/Images/hp4.jpg" },    
    { "id": 9, "brand": "Lenovo", "url": "assets/Images/laptop5.jpg" },    
    { "id": 10, "brand": "Lenovo", "url": "assets/Images/laptop7.jpg" },    
    { "id": 11, "brand": "Lenovo", "url": "assets/Images/laptop8.jpg" },    
    { "id": 12, "brand": "Lenovo", "url": "assets/Images/laptop9.jpg" },    
    { "id": 13, "brand": "Lenovo", "url": "assets/Images/laptop11.jpg" },    
    { "id": 14, "brand": "asus", "url": "assets/Images/laptop13.jpg" },    
    { "id": 15, "brand": "asus", "url": "assets/Images/laptop14.jpg" },    
    { "id": 16, "brand": "asus", "url": "assets/Images/laptop15.jpg" },    
    { "id": 17, "brand": "asus", "url": "assets/Images/laptop16.jpg" },    
    { "id": 18, "brand": "asus", "url": "assets/Images/laptop17.jpg" },    
    { "id": 19, "brand": "asus", "url": "assets/Images/laptop18.jpg" },    
    { "id": 20, "brand": "asus", "url": "assets/Images/laptop20.jpg" },    
    
]    