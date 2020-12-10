import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farcode';
  navigationBackground: boolean;
  doSomethingOnWindowScroll($event) {
    let scrollOffset = $event.children[0].scrollTop;
    if(scrollOffset >500){
      this.navigationBackground = true;
    } else{
      this.navigationBackground = false;
    }
    console.log("window scroll: ", scrollOffset);
  }
}
