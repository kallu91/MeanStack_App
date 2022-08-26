import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostserviceService } from './postservice.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  //@Input() posts:any[] = [];

  //getting the post from postservice Service
  posts: Post[] = [];

  //Unsubscribe from the subscription

   private postSub = new Subscription;

  constructor(public postService: PostserviceService) { }

  ngOnInit() {
     this.postService.getPost();
     this.postSub = this.postService.getPostUpdateListner().subscribe((post: Post[]) => {
     this.posts = post;
     console.log(post);

    })

  };

  ngOnDestroy(): void {
    return this.postSub.unsubscribe();
  }

}
