import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormGroupName,ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AuthGuard } from './service/auth.guard';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    ImageGalleryComponent,
    ImageDetailsComponent,
    FilterimagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [AuthGuard,ImageService,FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
