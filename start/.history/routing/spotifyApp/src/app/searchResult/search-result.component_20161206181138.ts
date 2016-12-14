import { Component } from '@angular/core';

@Component({
  selector:'search-result',
  inputs:['results'],
  template:`
       <h1>Results</h1>
              <div class="row">
                 <div class="col-sm-6 col-md-4" *ngFor="let t of results">
                        {{t}}
                  </div>
             </div>
     </div>
  `
})

export class SearchResult{

   results:Object;

}
