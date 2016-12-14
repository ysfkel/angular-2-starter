import { AlbumResult } from './../../../.history/src/app/models/albumResult.model_20161210135057';

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Album } from '../models/album.model';
import { AlbumResult } from '../models/albumResult.model';

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
     item:number= 0;

     constructor(private spotify:SpotifyService,
                 private router:Router,
                 private route:ActivatedRoute){
                   this.route.queryParams
                   .subscribe(params=>{
                   this.query=params['query']||'';
                   console.log('p',params);
                   })

      // this.query='yusuf';
     // this.item=0;
       this.albumResults=new Array<AlbumResult>(){

       }
       let param={

       }
       let album=new Album();
      let alR=new AlbumResult();
       this.albumResults.push();


        console.log('p',  this.albumResults);

     }


     submit(query:string):void{
         this.results.push(++this.item);
         this.router.navigate(['search'],{
           queryParams:{query:query}
         });
     }

     search():void{
          console.log()
     }

}

