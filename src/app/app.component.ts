import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { Router } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule, MaterialModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  onDashboard ()
  {
    console.log("Dashboard");
    this.router.navigate(['dashboard']);
  }
  onAbout(){
    console.log("About");
    this.router.navigate(['/about']);
  }

  onHome(){
    console.log("Home");
    this.router.navigate(['/']);
  }
}
