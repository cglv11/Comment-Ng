import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-edit-comments',
  templateUrl: './add-edit-comments.component.html',
  styleUrls: ['./add-edit-comments.component.css']
})
export class AddEditCommentsComponent implements OnInit{

  addComment: FormGroup;
  action: 'Add' | any;
  id = 0;
  comment: Comment | undefined;

  constructor(private fb: FormBuilder,
    private _commentService: CommentService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private toastr: ToastrService) {
    this.addComment = this.fb.group({
      title: ['', Validators.required],
      creator: ['', Validators.required], 
      text: ['', Validators.required],
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.isEdit();
  }

  isEdit() {
    if(this.id !== 0){
      this.action = 'Edit';
      this._commentService.getComment(this.id).subscribe(data => {
        this.comment = data;
        this.addComment.patchValue({
          title: data.title,
          text: data.text,
          creator: data.creator
        })
      }, error => {
        console.log(error)
      })
    }
  }

  addEditComment(){

    if(this.comment == undefined) {
      
      // Add new comment
      const comment: Comment = {
        title: this.addComment.get('title')?.value,
        creator: this.addComment.get('creator')?.value,
        text: this.addComment.get('text')?.value,
        dateCreation: new Date
      }
  
      this._commentService.saveComment(comment).subscribe(data => {
        this.toastr.success('Comment was registered successfully!', 'Comment registered!');
        this.router.navigate(['/']); 
      }, error => {
        console.log(error);
      })
    } else {

      // Update comment
      const comment: Comment = {
        id: this.comment.id,
        title: this.addComment.get('title')?.value,
        creator: this.addComment.get('creator')?.value,
        text: this.addComment.get('text')?.value,
        dateCreation: this.comment.dateCreation
      }

      this._commentService.updateComment(this.id, comment).subscribe(data => {
        this.toastr.info('Comment was updated successfully!', 'Comment updated!');
        this.router.navigate(['/']); 
      }, error => {
        console.log(error);
      })
    }
    
  }


 }
