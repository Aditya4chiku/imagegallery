import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id:string;
  constructor(private router:Router,public authService:AuthService) { }
 
  logOut()
  {

    console.log("logOut");

this.authService.logOut();
this.router.navigate(['/login']);
  }

  ngOnInit() 
  {
    this.id=localStorage.getItem('token');
  }

}
