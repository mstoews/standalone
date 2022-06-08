import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  standalone: true,
  templateUrl: './about.component.html',
  imports: [MaterialModule]
})
export class AboutComponent {}
