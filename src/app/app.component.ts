import { Component } from '@angular/core';
// import { Inject} from "@angular/core";
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  // constructor(@Inject(DOCUMENT) private document: Document) { }


  topFunction() {
    window.scroll(0,0);
    document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }
}
