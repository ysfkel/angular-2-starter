import { Component,OnInit } from '@angular/core';

@Component({
  selector:'album-attribution',
  inputs:['albumid','albumname'],
  template:`

  `
})

export class AttributionComponent implements OnInit{

  albumid:number;
  albumname:string;
  ngOnInit(){

  }

}
