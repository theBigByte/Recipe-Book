import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  checkValue = 'recipe';

  newFeature(feature: string){
    this.checkValue = feature;
  }

  constructor() {
   }



ngOnInit(){
}

}
