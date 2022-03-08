import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthGuard } from './common/services/auth-guard.service';
import { SignInComponent } from './account/signin/sign-in.component';
import { SignUpComponent } from './account/signup/sign-up.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'signin',
  //   pathMatch: 'full',
  // },
   {
    path: '',
    component: HomeLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/home-layout/home-layout.module#HomeLayoutModule'
  }]}
  // ,{
  //   path: '',
  //   component: UserLayoutComponent,
  //   children: [
  //       {
  //     path: '',
  //     loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
  // }]}
  ,
  {
    path: 'signin',
    component: SignInComponent
   },
   {
    path: 'signup',
    component: SignUpComponent
   },
  {
    path: '**',
    redirectTo: 'signin'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
