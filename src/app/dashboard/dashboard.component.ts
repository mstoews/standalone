import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

@Component({
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
