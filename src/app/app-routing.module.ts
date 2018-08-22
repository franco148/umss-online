import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBacklogComponent } from './components/project-backlog/project-backlog.component';

const routes: Routes = [
    { path: 'project-backlog/:id', component: ProjectBacklogComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
