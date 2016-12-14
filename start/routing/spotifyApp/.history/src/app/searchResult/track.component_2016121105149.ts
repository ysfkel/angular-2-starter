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

   constructor(private location:Location,
              private route:ActivatedRoute,
              private spotify:SpotifyService){

              }

}
