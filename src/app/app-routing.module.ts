import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './pages/splash/splash.component';
//import { SplashComponent } from './pages/splash/splash.component';
//import { LoginComponent } from './pages/login/login.component';
//import { HomeComponent } from './pages/home/home.component';
//import { UserDataComponent } from './pages/user-data/user-data.component';
//import { ContactComponent } from './pages/contact/contact.component';
//import { FixedAssetsComponent } from './pages/fixed-assets/fixed-assets.component';
//import { FixedassetcreateComponent } from './pages/fixedassetcreate/fixedassetcreate.component';
//import { FixedassetmoveComponent } from './pages/fixedassetmove/fixedassetmove.component';
//import { FixedassetdeleteComponent } from './pages/fixedassetdelete/fixedassetdelete.component';
//import { FixedassetupdateComponent } from './pages/fixedassetupdate/fixedassetupdate.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
 /* { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'userData', component: UserDataComponent },
  { path: 'fixedAssets', component: FixedAssetsComponent },
  { path: 'fixedAssetCreate', component: FixedassetcreateComponent },
  { path: 'fixedAssetMove', component: FixedassetmoveComponent },
  { path: 'fixedAssetDelete', component: FixedassetdeleteComponent },
  { path: 'fixedAssetUpdate', component: FixedassetupdateComponent },
  { path: 'contact', component: ContactComponent }*/
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

