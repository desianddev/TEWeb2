import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { TemplateService } from './common/services/template.service';
import { AuthGuard } from './common/services/auth-guard.service';
import { httpInterceptorProviders } from './common/services/httpInterceptorProviders';
import { DynamicScriptLoaderService } from './common/services/dynamic-script-load-service';
import { StyleService } from './common/services/style.service';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ModalModule, BsModalService } from 'ngx-foundation';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterArrayPipe } from './common/directive/array.pipe.filter';
import { SignInComponent } from './account/signin/sign-in.component';
import { SignUpComponent } from './account/signup/sign-up.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { ManageStaffComponent } from './User/tournaments/manage-staff/manage-staff.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#088cf4',
  // bgsOpacity: 0.5,
  // bgsPosition: POSITION.bottomCenter,
  // bgsSize: 60,
  // bgsType: SPINNER.rectangleBounce,
  fgsColor: '#088cf4',
  // fgsPosition: POSITION.centerCenter,
  // fgsSize: 60,
  // fgsType: SPINNER.chasingDots,
  // logoUrl: 'assets/angular.png',
  pbColor: '#088cf4',
  // pbDirection: PB_DIRECTION.leftToRight,
  // pbThickness: 5,
  // text: 'Welcome to ngx-ui-loader',
  // textColor: '#FFFFFF',
  // textPosition: POSITION.centerCenter
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserModule,
    InfiniteScrollModule,
    RouterModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeLayoutComponent,
    FilterArrayPipe
    // ManageStaffComponent
  ],
  providers: [TemplateService, AuthGuard, httpInterceptorProviders, DynamicScriptLoaderService, StyleService],
  bootstrap: [AppComponent]
})

export class AppModule { }
