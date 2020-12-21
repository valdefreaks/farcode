import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { useHash: true, relativeLinkResolution: 'legacy' });