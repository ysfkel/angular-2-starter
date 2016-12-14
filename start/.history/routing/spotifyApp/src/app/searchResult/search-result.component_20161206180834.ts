import { Component } from '@angular/core';

@Component({
  selector:'search-result',
  inputs:['result'],
  template:`
       <h1>Results</h1>
              <div class="row">
                 <div class="col-sm-6 col-md-4" *ngFor="let t of results">

             </div>
     </div>
  `
})

export class SearchResult{

   result:Object;

}
