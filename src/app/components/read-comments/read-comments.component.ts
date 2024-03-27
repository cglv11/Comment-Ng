import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-read-comments',
  templateUrl: './read-comments.component.html',
  styleUrls: ['./read-comments.component.css']
})
export class ReadCommentsComponent {

  id: number;
  comment: Comment | undefined;

  constructor(private aRoute: ActivatedRoute,
              private _commentService: CommentService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.getComment();
  }

  getComment() {
    this._commentService.getComment(this.id).subscribe(data => {
      this.comment = data;
    }, error => {
      console.log(error);
    })
  }
}
