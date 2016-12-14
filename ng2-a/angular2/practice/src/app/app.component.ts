import { Component } from '@angular/core';
import { DirectivesComponent } from './directives';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[DirectivesComponent]

})
export class AppComponent {
  
}
