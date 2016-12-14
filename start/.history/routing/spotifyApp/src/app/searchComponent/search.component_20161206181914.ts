import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Component, OnInt } from '@angular/core';

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

     query:string;
     results:Array<number>;
     item:number;

     constructor(){
       this.query='yusuf';
       this.item=0;
       console.log('arr',this.results)

      // this.results=[];
     }

     submit(){
         this.results.push(++this.item);
         console.log(this.item);
     }

}

