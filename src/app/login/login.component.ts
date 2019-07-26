import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILogin } from '../login';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private route:Router,
    private _authService:AuthService,private _authGuard:AuthService
    
    ) { }
 


model: ILogin = {userid:'admin',password:'admin'};

loginForm:FormGroup;
message:string;




  ngOnInit()
     {
       this.loginForm=this.formBuilder.group({
       userid:['',Validators.required],
       password:['',Validators.required]
     });

        //  this._authService.logOut();

  }
  get f()
  {
    return this.loginForm.controls;
  }
  
  login()
  {

       if(this.loginForm.invalid)
            return;
       else
       {
          if(this.f.userid.value==this.model.userid && this.f.password.value ==this.model.password)
         {
       
          localStorage.setItem('isLoggedIn','true');
          localStorage.setItem('token', this.f.userid.value);
          this.route.navigate(['/imageGalary'])   
          console.log('Login Success');   


          }
          else
          {
            this.message = "Please check your userid and password";
          }
  }

     }

}
