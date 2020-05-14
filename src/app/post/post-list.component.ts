import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe((data) => {
      console.log(data);
    });
  }

}


/* 
Create a table for post with proper column names like id, userid, title, body, 'view comment'.
you can use bootstrap, angular material, just simple td tr.

have one more column at the rightmost side, and call it "view comments" and 
when you click it make a new web api call to "https://jsonplaceholder.typicode.com/posts/{id}/comments"
and create a new table below, to dislay the comments for the selected post. 
(and highlight the post (row) that you clicked the "view comments" button for so that it's visible
which post's comments are being displayed in the table below)
*** Create proper comment class and comment-list components.
refresh the comment table if "view" button for another post is clicked.

*/
