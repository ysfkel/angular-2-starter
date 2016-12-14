
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
                  <search-result
                   [results]="results"
                   [albumresults]="albumresults">
                   </search-result>
           </div>
       </div>

    `
})

export class SearchComponent{

     albumresults:Array<AlbumResult>;
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
           //
       let param={
            images:[],
            name:'yk',
            id:1
       }
       let album=new Album(param);

       let alR=new AlbumResult({album:album});

       this.albumresults.push(alR);


        console.log('p',  this.albumresults);
         //

         this.router.navigate(['search'],{
           queryParams:{query:query}
         });



     }

     search():void{
          console.log()
     }

}

