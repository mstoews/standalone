import { Component } from '@angular/core';

import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material.module';

@Component({
  standalone: true,
  imports: [DetailsComponent,MaterialModule],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [`.example-spacer {
    flex: 1 1 auto;
  }`]
})
export class WelcomeComponent {}
