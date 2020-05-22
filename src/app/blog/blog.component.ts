import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  impredPosts: Post[];
  constructor(private dataService: DataService) {
    this.impredPosts = [

    ];
  }

  async ngOnInit() {
    this.impredPosts = await this.dataService.getAllPosts();
  }

  async buscarCategoria($event) {
    if ($event.target.value === 'todos') {
      this.impredPosts = await this.dataService.getAllPosts();
    } else {
      this.impredPosts = await this.dataService.getPostsByCategoria($event.target.value);
    }

  }
}
