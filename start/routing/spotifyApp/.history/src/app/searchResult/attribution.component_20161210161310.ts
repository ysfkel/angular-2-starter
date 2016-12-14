import { Component,OnInit } from '@angular/core';

@Component({
  selector:'album-attribution',
  inputs:['albumid','albumname'],
  template:`
     <div class="attribution">

                <h4>
                  <a [routerLink]="['/albums', albumid]">
                    {{ albumname }}
                  </a>
      </h4> </div>
  `
})

export class AttributionComponent implements OnInit{

  albumid:number;
  albumname:string;
  ngOnInit(){
   console.log('attribution',this.albumname)
  }

}
