import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { StoreService } from './store.service';
import { WebsiteComponent } from './components/products/website/website.component';
import { DomainComponent } from './components/products/domain/domain.component';
import { SslcComponent } from './components/products/sslc/sslc.component';
import { BusinessEmailComponent } from './components/products/business-email/business-email.component';
import { DigitalMarketingComponent } from './components/products/digital-marketing/digital-marketing.component';
import { VitrualTourComponent } from './components/products/vitrual-tour/vitrual-tour.component';
import { ProductComponent } from './components/products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BenefitsComponent,
    FaqComponent,
    AboutComponent,
    WebsiteComponent,
    DomainComponent,
    SslcComponent,
    BusinessEmailComponent,
    DigitalMarketingComponent,
    VitrualTourComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
