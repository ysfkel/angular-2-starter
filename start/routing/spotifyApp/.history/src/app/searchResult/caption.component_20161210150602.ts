import { Component } from '@angular/core';

@Component({
  selector:'album-caption',
  inputs:['artists','albumid','albumname'],
  template:`
  `
})

export class CaptionComponent {

  artists:Array<any>;
  albumid:number;
  albumname:string;

}
