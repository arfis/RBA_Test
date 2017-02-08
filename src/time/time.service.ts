/**
 * Created by a619678 on 8. 2. 2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class TimeService{

  getTimes(){
    return {data:[ {id : 1, time : "12:30"}, {id : 2, time : "15:00"} ]};
  }
};
