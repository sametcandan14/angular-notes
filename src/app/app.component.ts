import { Component } from '@angular/core';

@Component({
  // selector: 'app'
  // selector: ".app",
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private title = 'Home Page';

  public getTitle() {
    return this.title;
  }
}
