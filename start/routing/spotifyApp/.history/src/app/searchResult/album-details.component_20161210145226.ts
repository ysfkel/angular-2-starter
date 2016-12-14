import { Component } from '@angular/core';

@Component({
    selector:'album-details',
    inputs:['item'],
    template:`
       <div class="thumbnail">
           <div class="content">
               <album-image [url]="item.album.images[0].url"></album-image>
               <album-caption [item]="item"></album-caption>
               <album-attribution [item]="item"></album-attribution>
           </div>
       </div>
    `
})

export class AlbumDetailsComponent{

  item:Object;

}
