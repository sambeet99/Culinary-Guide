import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any;

  loadedFeature: string = 'recipe';

  //feature is the event (of type string) captured by html and assigned it to another variable loadedfeature.
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
