import { Routes } from '@angular/router';

import { IndexComponent } from 'app/home/index/index.component';

import { ContactUsComponent } from 'app/home/contactus/contactus.component';
import { FeaturesComponent } from 'app/home/features/features.component';
import { FaqComponent } from 'app/home/faq/faq.component';
import { PrivacyComponent } from 'app/home/privacy/privacy.component';
import { TermsComponent } from 'app/home/terms/terms.component';
import { AboutUsComponent } from 'app/home/aboutus/aboutus.component';
import { SiteMapComponent } from 'app/home/sitemap/sitemap.component';

export const HomeLayoutRoutes: Routes = [
    { path: '',              component: IndexComponent },
    { path: 'contactus',     component: ContactUsComponent },
    { path: 'features',      component: FeaturesComponent },
    { path: 'faq',           component: FaqComponent },
    { path: 'privacy',       component: PrivacyComponent },
    { path: 'terms',         component: TermsComponent },
    { path: 'aboutus',       component: AboutUsComponent },
    { path: 'sitemap',       component: SiteMapComponent }
];
