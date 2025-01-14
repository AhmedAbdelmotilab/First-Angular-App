import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About',
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'About',
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: 'portfolio',
    },
    {
        path: '**',
        component: NotfoundpageComponent,
        title: '404',
    },
];
