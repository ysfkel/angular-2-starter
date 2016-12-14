import { Component } from '@angular/core';
import { YusufComponent } from './yusuf';
import { OtherComponent } from './yusuf';
import { DatabindingComponent } from './databinding';
import { LyfeCycleComponent } from './lyfe-cycle.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[YusufComponent,OtherComponent,DatabindingComponent,LyfeCycleComponent]
})
export class AppComponent {
  title = 'yusuf app works!';

   delete= false;

   test="test";

   boundValue=1000;

}
