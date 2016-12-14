import { Component } from '@angular/core';

@Component({
  selector:'album-image',
  inputs:['url'],
  template: `

    <img src="{{ url }}" class="img-responsive">
  `
})


export class ImageComponent {
   url:string;

}
