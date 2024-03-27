import { RouterModule } from "@angular/router";
import { ListCommentsComponent } from "./components/list-comments/list-comments.component";
import { AddEditCommentsComponent } from "./components/add-edit-comments/add-edit-comments.component";
import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ReadCommentsComponent } from "./components/read-comments/read-comments.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'front-comments';
}
