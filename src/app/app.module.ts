import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditCommentsComponent } from './components/add-edit-comments/add-edit-comments.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReadCommentsComponent } from './components/read-comments/read-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditCommentsComponent,
    ListCommentsComponent,
    NavbarComponent,
    ReadCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
