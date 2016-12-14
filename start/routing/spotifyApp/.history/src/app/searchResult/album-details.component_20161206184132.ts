import { Component } from '@angular/core';

@Component({
    selector:'album-details',
    inputs:['album'],
    template:`
       <div class="thumbnail">
           <div class="content">
               <album-image [url]="album.images[0].url"></album-image>
           </div>
       </div>
    `
})
