import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/products/product/product.component';
import { WebsiteComponent } from './components/products/website/website.component';
import { BusinessEmailComponent } from './components/products/business-email/business-email.component';
import { DigitalMarketingComponent } from './components/products/digital-marketing/digital-marketing.component';
import { DomainComponent } from './components/products/domain/domain.component';
import { SslcComponent } from './components/products/sslc/sslc.component';
import { VitrualTourComponent } from './components/products/vitrual-tour/vitrual-tour.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'benefits', component: BenefitsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: HomeComponent},
    { path: 'product', component: ProductComponent, children: [
        { path: 'business-email', component: BusinessEmailComponent },
        { path: 'digital-marketing', component: DigitalMarketingComponent },
        { path: 'domain', component: DomainComponent },
        { path: 'sslc', component: SslcComponent },
        { path: 'virtual-tour', component: VitrualTourComponent },
        { path: 'website', component: WebsiteComponent }
    ] },
    { path: '**', redirectTo: '/home'}

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
