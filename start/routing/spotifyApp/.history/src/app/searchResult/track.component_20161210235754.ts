import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../services/spotify.service';

@Component({
  selector:'track',
 // inputs:[],
  template:`
     <h3>track</h3>


  `
})


export class TrackComponent implements OnInit {

    id:string;
    track:Object;

    constructor(private route:ActivatedRoute,
        private spotify:SpotifyService,
        private location:Location
    ){

    }
    ngOnInit():void{
        this.spotify
        .getTrack(this.id)
        .subscribe((res:any)=>this.renderTrack(res));
    }

    back():void{
     this.location.back();
    }
    renderTrack(res:any):void{

    }
}
