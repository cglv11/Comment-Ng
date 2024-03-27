import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../../interfaces/Comment';
import { Router } from '@angular/router'; // Import Router
import { CommentService } from 'src/app/services/comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent {
  listComments: Comment[] = [];

  constructor(private _commentService: CommentService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this._commentService.getListComments().subscribe(data => {
      this.listComments = data;
    }, error => {
      this.toastr.error('Ups there was an error!', 'Sorry :c');
      console.log(error);
    })
  }

  deleteComment(id: any) {
    this._commentService.deleteComment(id).subscribe(data => {
      this.getComments();
      this.toastr.error('Comment deleted successfully!', 'Register deleted');
    }, error => {
      console.log(error);
    })
  }
 }
 