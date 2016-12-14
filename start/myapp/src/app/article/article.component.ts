import {Article} from './article.model';
import { Component, OnInit Input} from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    host:{
        class:'row'
    }
})

export class ArticleComponent implements OnInit{

    @Input()article:Article;

    constructor(){
    //  this.article=new Article(
    //      "this is great",
    //      "http://www.yahoo.com",
    //      10
    //  );
    }

    ngOnInit(){

    }

    voteUp():boolean{
        this.article.voteUp();
        return false;
    }
    voteDown():boolean{
        this.article.voteDown();
        return false;
    }

}