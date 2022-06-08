import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  templateUrl: './today.component.html',
  imports: [MaterialModule]
})
export class TodayComponent {}
