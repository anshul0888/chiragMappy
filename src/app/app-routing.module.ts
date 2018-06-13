import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'benefits', component: BenefitsComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'about', component: AboutComponent },
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
