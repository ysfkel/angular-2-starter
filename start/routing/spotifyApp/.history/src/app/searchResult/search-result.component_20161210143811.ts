import { Component,OnInit } from '@angular/core';
import { AlbumResult } from './../models/albumResult.model';

@Component({
  selector:'search-result',
  inputs: ['results', 'records'],
  template:`
       <h1>Results</h1>
    <div class="row">
              <div class="col-sm-6 col-md-4" *ngFor="let t of results">
                     {{t}}
             </div>
     </div>
  `
})

export class SearchResult{

   results:Object;
   records: Array<AlbumResult>;


   constructor(){
     console.log('albumResult',this.results,this.records)
   }

}
