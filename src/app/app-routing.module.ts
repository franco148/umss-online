import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBacklogComponent } from './components/project-backlog/project-backlog.component';
import { UoAuthLoginComponent } from './components/auth/uo-auth-login/uo-auth-login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

const routes: Routes = [
    { path: 'login', component: UoAuthLoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'project-backlog/:id', component: ProjectBacklogComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
