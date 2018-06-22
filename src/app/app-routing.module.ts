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
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SeoSemComponent } from './components/products/digital-marketing/seo-sem/seo-sem.component';
import { SmoSmmComponent } from './components/products/digital-marketing/smo-smm/smo-smm.component';
import { EmailMarketingComponent } from './components/products/digital-marketing/email-marketing/email-marketing.component';
import { PcComponent } from './components/products/digital-marketing/pc/pc.component';
import { BrandManagementComponent } from './components/products/digital-marketing/brand-management/brand-management.component';
import { RepulsionManagementComponent } from './components/products/digital-marketing/repulsion-management/repulsion-management.component';
import { ContentMarketingComponent } from './components/products/digital-marketing/content-marketing/content-marketing.component';
import { GraphicDesigningComponent } from './components/products/graphic-designing/graphic-designing.component';
import { BulkSmsComponent } from './components/products/bulk-sms/bulk-sms.component';
import { ECommerceComponent } from './components/products/e-commerce/e-commerce.component';
import { SoftwareDevDesignComponent } from './components/products/software-dev-design/software-dev-design.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'benefits', component: BenefitsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: HomeComponent},
    { path: 'product', component: ProductComponent, children: [
        { path: 'bulk-sms', component: BulkSmsComponent },
        { path: 'business-email', component: BusinessEmailComponent },
        { path: 'digital-marketing', component: DigitalMarketingComponent,children: [
            { path: 'brand-management', component: BrandManagementComponent },
            { path: 'content-marketing', component: ContentMarketingComponent },
            { path: 'email-marketing', component: EmailMarketingComponent },
            { path: 'pc-marketing', component: PcComponent },
            { path: 'repulsion-management', component: RepulsionManagementComponent },
            { path: 'seo-sem', component: SeoSemComponent },
            { path: 'smo-smm', component: SmoSmmComponent }
        ] },
        { path: 'domain', component: DomainComponent },
        { path: 'e-commerce', component: ECommerceComponent },
        { path: 'graphic-designing', component: GraphicDesigningComponent },
        { path: 'software-devlopment', component: SoftwareDevDesignComponent },
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
