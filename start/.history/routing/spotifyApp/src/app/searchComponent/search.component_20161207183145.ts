import { AlbumResult } from './../models/albumResult.module';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
    selector:'search-component',
    template:`
       <h1>Search</h1>
       <p>
          <input type="text" #newquery
          [value]="query"
          (keydown.enter)="submit(newquery.value)">
          <button (click)="submit(newquery.value)">Search</button>
       </p>
       <div *ngIf="results">
           <div *ngIf="!results.length">
              No tracks were found with the term '{{query}}'
           </div>
           <div *ngIf="results.length">
                  <search-result [results]="results"></search-result>
           </div>
       </div>

    `
})

export class SearchComponent{

    albumResults:Array<AlbumResult>;

     query:string;
     results:Array<number>= [];
     item:number;

     constructor(private spotify:SpotifyService,
                 private router:Router,
                 private route:ActivatedRoute){

       this.query='yusuf';
       this.item=0;
       this.albumResults=new Array<AlbumResult>(

       )


       console.log( )

     }


     submit(){
         this.results.push(++this.item);
         this.router.navigate(['home']);
     }

}

