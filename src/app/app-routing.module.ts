import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { AddEditCommentsComponent } from './components/add-edit-comments/add-edit-comments.component';
import { ReadCommentsComponent } from './components/read-comments/read-comments.component';

export const routes: Routes = [
  { path: '', component: ListCommentsComponent },
  { path: 'add', component: AddEditCommentsComponent },
  { path: 'edit/:id', component: AddEditCommentsComponent },
  { path: 'read/:id', component: ReadCommentsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
