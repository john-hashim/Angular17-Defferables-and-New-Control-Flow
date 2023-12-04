import { Component } from '@angular/core';
import { FooComponent } from './foo.component';

@Component({
  standalone: true,
  selector: 'app-defferable-views',
  imports: [FooComponent],
  template: `
    <h1>Defferable View</h1>

    @defer (on hover) {
    <foo />
    } @loading(minimum 2s){
    <div>Loading</div>
    } @placeholder {
    <div>placeholder</div>
    }

    <!-- <div class="container"></div>
    @defer (on viewport(refJohn)) {
    <foo /> -->
    <!-- } -->
    <!-- <div #refJohn>hello div</div> -->

    <button (click)="iSaySo = true">Add View</button>
  `,
  styles: `
    .container{
        height: 80vh;
        width: 30px;
        background: blue;
    }
    `,
})
export class DefferableViewsComponent {
  iSaySo: boolean = false;
}
