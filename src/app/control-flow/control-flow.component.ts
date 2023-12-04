import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  imports: [NgIf, NgSwitch, NgSwitchCase],
})
export class ControlFlowComponent {
  bestClub: boolean = false;
  clubs: 'real' | 'barca' | 'milan' = 'real';
  clubs2 = ['real', 'barca', 'milan'];
}
