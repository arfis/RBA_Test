/**
 * Created by a619678 on 8. 2. 2017.
 */
import {Component} from "@angular/core";
import {TimeService} from "./time.service";
@Component({
  selector: 'timeComponent',
  templateUrl: './time.component.html'
})

export class TimeComponent {

  times : any;

  constructor(private service : TimeService){
    this.times = service.getTimes();
  }

  timeMessage = 'This is the time component!';

}
