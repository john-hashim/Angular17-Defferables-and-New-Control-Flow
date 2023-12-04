import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DefferableViewsComponent } from './defferable-views/defferable-views.component';
import { FooComponent } from './defferable-views/foo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ControlFlowComponent,
    DefferableViewsComponent,
    FooComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular17';
}
