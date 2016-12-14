import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../services/spotify.service';

@Component({
  selector:'track',
  inputs:[],
  template:`
     <h3>track</h3>
  `
})


export class TrackComponent implements OnInit{


    constructor(
        private route:ActivatedRoute,
        private spotify:SpotifyService,
        private location:Location

    ){

    }
    ngOnInit():void{

    }
}
