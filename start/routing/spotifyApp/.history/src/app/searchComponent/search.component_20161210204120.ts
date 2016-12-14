
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Album } from '../models/album.model';
import { AlbumResult } from '../models/albumResult.model';
import 'rxjs/Rx';

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

                  <search-result
                   [results]="results"
                   [records]="albumresults">
                   </search-result>
           </div>
       </div>

    `
})

export class SearchComponent{

     albumresults:Array<AlbumResult>=new Array<AlbumResult>();
     query:string;
     results:Array<number>= [];
     item:number= 0;

     constructor(private spotify:SpotifyService,
                 private router:Router,
                 private route:ActivatedRoute){
                   this.route.queryParams
                   .subscribe(params=>{
                   this.query=params['query']||'';

                   })

      // this.query='yusuf';
     // this.item=0;


     }


     submit(query:string):void{

       this.results.push(++this.item);


         this.router.navigate(['search'],{
           queryParams:{query:query}
         })
         .then(_=>this.search());


     }

     popolateAlbumResumt(results:Array<any>){

          results.forEach(item=>{
              let alR=new AlbumResult(item);
               this.albumresults.push(alR);
          })
     }



     search():void{

       if(!this.query){
         return;
       }

       this.spotify
       .searchTrack(this.query)
       .subscribe((res:any)=>{
         console.log('search results',res.tracks);

         this.popolateAlbumResumt(res.tracks.items)

      }
         );

     }

}

