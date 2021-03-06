import { Component,OnInit} from '@angular/core';


@Component({
    selector:'album-details',
    inputs:['item'],
    template:`
       <div class="thumbnail">
           <div class="content">
               <album-image [url]="url"></album-image>

           </div>
       </div>
    `
})

export class AlbumDetailsComponent implements OnInit{

  item:Object;
  url:string;

  ngOnInit(){

     this.url=(this.item.album && this.item.album.images && this.item.album.images.length>0) ?
      this.item.album.images[0].url:null
  }

}

  // <album-caption [item]="item"></album-caption>
  //              <album-attribution [item]="item"></album-attribution>
