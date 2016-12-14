import { Component,OnInit} from '@angular/core';


@Component({
    selector:'album-details',
    inputs:['item'],
    template:`
       <div class="thumbnail">
           <div class="content">
               <album-image [url]="item.album.images[0].url"></album-image>

           </div>
       </div>
    `
})

export class AlbumDetailsComponent implements OnInit{

  item:Object;

  ngOnInit(){

  }

}

  // <album-caption [item]="item"></album-caption>
  //              <album-attribution [item]="item"></album-attribution>
