import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h4>this is the another template component</h4>,
    <h1> my name is {{title}}</h1>,
   
    <img [src]="imgpic">`,

 styles:[`h4{color:pink;}`],
})

export class TutorialComponent{
    public title="susmitha";
    public imgpic="http://lorempixel.com/400/200";


}