import { Component } from '@angular/core';

@Component({
  selector:'track',

  template: `

    <img src="{{ url }}" class="img-responsive">
  `
})


export class ImageComponent {
   url:string;

}
