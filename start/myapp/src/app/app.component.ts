import {RouterLink, RouterLinkActive} from '@angular/router';

import { Component } from '@angular/core';
import { Article } from './article/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
//  articles: Article[];
 articles: Array<Article>;

 constructor(){
   this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
 }

 sortedArticles(): Article[] {
   return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean{
         console.log(`title ${title.value}, link ${link.value}`);

         this.articles.push(new Article(
           title.value,
           link.value,
           0
         ));

         return false;
  }

}
