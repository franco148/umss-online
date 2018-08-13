import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBacklogComponent } from './components/main/project-backlog/project-backlog.component';

const routes: Routes = [
    { path: 'project', component: ProjectBacklogComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
