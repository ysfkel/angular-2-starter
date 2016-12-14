import { Component,OnInit } from '@angular/core';

@Component({
  selector:'album-caption',
  inputs:['artists','albumid','albumname'],
  template:`
      <div class="caption">
                <h3>
                  <a [routerLink]="['/artists', artists[0].id]">
                    {{ artists[0].name }}
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
     let artist=(this.artists && this.artists.length>0)?this.artists[0];
     this.displayed_artisit_id=artist.id;
     this.displayed_artisit_name=artist.name;
  }

}
