import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post-list/post.model';
import { PostserviceService } from '../post-list/postservice.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  // @Output() postsCreated = new EventEmitter();

  // Name: string = '';
  // Email: string = '';
  // PhoneNumber: any;

  /*Using Service refactoring the code because it is easy to transfer data to different components using service rather than Event
  emitter and @Input and @Output*/
  posts: Post[] = [];

  constructor(public postService: PostserviceService) { }

  ngOnInit(): void {
  }

  onClickPost(postform: NgForm) {
    if (postform.invalid) {
      return;
    } else {
      //  const post = { Name: postform.value.Name, Email: postform.value.Email, PhoneNumber: postform.value.PhoneNumber };
      // this.postsCreated.emit(post);
      this.postService.addPosts(postform.value.Name, postform.value.Email, postform.value.PhoneNumber)
      postform.resetForm();
    }


  }
}
