import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:HttpClient) { }

  private posts:Post[] = [];

  private postsUpdated = new Subject<Post[]>()

  getPost(){
    return this.http.get<{message:string,post:Post[]}>('http://localhost:3000/api/posts').subscribe(data=>{
      this.posts = data.post;
       this.postsUpdated.next([...this.posts])
    })
  };

  getPostUpdateListner(){
    return this.postsUpdated.asObservable();
  }

  addPosts(Name:string,email:string,PhoneNumber:number){

   const post:Post = {Name:Name,Email:email,PhoneNumber:PhoneNumber};
    //sending post to server

    this.http.post<Post[]>('http://localhost:3000/api/post',post).subscribe(data=>{
      console.log(data);
      this.posts.push(post);
      return this.postsUpdated.next([...this.posts]);
    })
  };

  deletePost(){

  }
}
