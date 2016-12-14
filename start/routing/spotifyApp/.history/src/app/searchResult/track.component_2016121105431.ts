import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector:'track',
  template: `
<h1>hi</h1>
  `
})


export class TrackComponent implements OnInit{

   id:string;
   track:Object;
   constructor(private location:Location,

              private route:ActivatedRoute,
              private spotify:SpotifyService){
                   route.params.subscribe(params=>{
                     this.id=params['id'];
                   })
              }
   ngOnInit(){
     this.spotify
     .getTrack(this.id)
     .subscribe((res:any)=>this.renderTrack(res));
   }

    back():void{
      this.location.back();
    }

    renderTrack(res:any):void{
        this.track=res;
    }
}
