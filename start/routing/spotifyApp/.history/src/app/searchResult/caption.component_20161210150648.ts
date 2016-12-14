import { Component } from '@angular/core';

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
                  <a [routerLink]="['/tracks', t.id]">
                    {{ t.name }}
                </a> </p>
     </div>
  `
})

export class CaptionComponent {

  artists:Array<any>;
  albumid:number;
  albumname:string;

}
