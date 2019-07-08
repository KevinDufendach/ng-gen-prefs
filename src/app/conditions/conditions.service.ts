import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Condition} from './condition';
import {REDCapService} from '../../../projects/ng-redcap/src/field/redcap.service';

@Injectable({
  providedIn: 'root'
})
export class ConditionsService {
  conditions = new Array<Condition>();

  constructor(private http: HttpClient, private rs: REDCapService) {
    this.initialize();
  }

  private initialize() {
    this.http.get('/assets/conditions.json').subscribe(data => {
      console.log(data);

      this.conditions = data as Condition[];
    });
  }

  shouldDisplay(cond: Condition): boolean {
    return (cond.preventable || this.rs.valueOf('preventable_adol') === '1') &&
      (cond.treatable || this.rs.valueOf('treatable_adol') === '1') &&
      (!cond.adult_onset || this.rs.valueOf('adlt_onset_adol') === '1');

    // const carrierBool = (!cond.adult_onset || this.rs.valueOf('adlt_onset_adol') === '1');
  }
}
