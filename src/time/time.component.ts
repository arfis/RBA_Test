/**
 * Created by a619678 on 8. 2. 2017.
 */
import {Component} from "@angular/core";
import {TimeService} from "./time.service";
import {Observable} from "rxjs";
@Component({
  selector: 'timeComponent',
  templateUrl: './time.component.html'
})

export class TimeComponent {

  times : any;

  constructor(private service : TimeService){
    this.times = service.getTimes();

    let obs = new Observable(observer => {

      console.log('xxx');

      observer.next({user: {name:'user1'}});
      observer.next({user: {name:'user2'}});
      observer.complete();

    }).map((user : any) => {

      return user.user.name;

    })
      .filter(user => (user == "user2"));

    let p = obs.toPromise();

    p.then(user => {

      console.log('prr');
      console.log(user);
    });

    obs.subscribe(user => {

      console.log('obs1');
      console.log(user);
    });

    obs.subscribe(user => {

      console.log('obs2');
      console.log(user);
    });
  }

  timeMessage = 'This is the time component!';

}
