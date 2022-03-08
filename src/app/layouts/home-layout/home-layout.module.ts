import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { HomeLayoutRoutes } from './home-layout.routing';
import { IndexComponent } from 'app/home/index/index.component';
import { TermsComponent } from 'app/home/terms/terms.component';
import { PrivacyComponent } from 'app/home/privacy/privacy.component';
import { FeaturesComponent } from 'app/home/features/features.component';
import { ContactUsComponent } from 'app/home/contactus/contactus.component';
import { FaqComponent } from 'app/home/faq/faq.component';
import { AboutUsComponent } from 'app/home/aboutus/aboutus.component';
import { SiteMapComponent } from 'app/home/sitemap/sitemap.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
  ],
  declarations: [
    IndexComponent,
    TermsComponent,
    PrivacyComponent,
    FeaturesComponent,
    ContactUsComponent,
    AboutUsComponent,
    FaqComponent,
    SiteMapComponent
  ]
})

export class HomeLayoutModule {}
