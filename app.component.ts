import { Component } from '@angular/core';
import{TutorialComponent} from './app.turtorialscomponent'

@Component({
  selector: 'my-app',
  template: `<h1>Hello susu you will get </h1>
            <h5>this is the app componet tag</h5>
             <my-tutorial></my-tutorial>`,
     styles:[`h5{color:green}`],
directives: [TutorialComponent]
})
export class AppComponent { }
