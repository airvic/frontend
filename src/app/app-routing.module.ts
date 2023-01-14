import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ExploreComponent } from './explore/explore.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
   component:HomeComponent
  },
  {
    path: 'login',
   component:LoginComponent
  },
  {
    path: 'admin',
   component:AdminComponent
  }
  ,
  {
    path: 'contactus',
   component:ContactusComponent
  }
  
  ,
  {
    path: 'explore/:title/:id',
   component:ExploreComponent
  }
  ,
  {
    path: 'privacypolicy',
   component:PrivacypolicyComponent
  }
  ,
  {
    path: 'privacypolicy/contactus',
   component:ContactusComponent
  },
  {
    path: 'pagenotfound',
   component:PagenotfoundComponent
  }
  ,
  {
    path: 'pagenotfound/home',
   component:HomeComponent
  }
  ,
  {
    path: '***',
   component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
