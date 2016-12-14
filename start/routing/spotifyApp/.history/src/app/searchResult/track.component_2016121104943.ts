import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector:'track',
  template: `
<h1>hi</h1>
  `
})


export class TrackComponent implements OnInit{
   url:string;

}
