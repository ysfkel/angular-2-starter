import { Component,OnInit } from '@angular/core';

@Component({
  selector:'album-caption',
  inputs:['artists','albumid','albumname'],
  template:`
      <div class="caption">
                <h3>
                  <a [routerLink]="['/artists', displayed_artisit_id]">
                    {{ displayed_artisit_name }}
                  </a>
                </h3>
                <br>
                <p>
                  <a [routerLink]="['/tracks', albumid]">
                    {{ albumname }}
                </a> </p>
     </div>
  `
})

export class CaptionComponent implements OnInit {

  artists:Array<any>;
  displayed_artisit_id:number;
  displayed_artisit_name:string

  albumid:number;
  albumname:string;

  ngOnInit(){
     let artist=(this.artists && this.artists.length>0)? this.artists[0]:null;
     this.displayed_artisit_id=artist && artist.id || 0;
     this.displayed_artisit_name=artist && artist.name || 'Yusuf Kelo';
  }

}
