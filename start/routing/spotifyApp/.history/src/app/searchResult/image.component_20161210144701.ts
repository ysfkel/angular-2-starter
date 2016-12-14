import { Component } from '@angular/core';

@Component({
  selector:'album-image',
  inputs:['url'],
  template: `
    <h2>images</h2>
    <img src="{{ url }}" class="img-responsive">
  `
})


export class ImageComponent {
   url:string;

}
