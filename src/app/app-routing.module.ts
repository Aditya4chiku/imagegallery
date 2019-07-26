import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';


const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'imageGalary',canActivate:[AuthGuard],component:ImageGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
