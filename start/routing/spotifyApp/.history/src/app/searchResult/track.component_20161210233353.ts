import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } '@angular/router';

@Component({
  selector:'track',
  inputs:[],
  template:`
     <h3>track</h3>
  `
})


export class TrackComponent implements OnInit{


    constructor(private route:ActivatedRoute,
        private spotify:
    ){

    }
    ngOnInit():void{

    }
}
