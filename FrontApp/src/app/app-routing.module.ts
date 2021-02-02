import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './auth/bz-can-activate-auth';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { MeComponent } from './components/me/me.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
    {
        path: 'login-app',
        component: LoginComponent
    },
    {
        path: 'me',
        component: MeComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'jobs',
        component: JobsComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: '**',
        redirectTo: 'login-app',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
