import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Condition} from './condition';

@Injectable({
  providedIn: 'root'
})
export class ConditionsService {
  conditions = new Array<Condition>();

  constructor(private http: HttpClient) {
    this.initialize();
  }

  private initialize() {
    this.http.get('/assets/conditions.json').subscribe(data => {
      console.log(data);

      this.conditions = data as Condition[];
    });
  }
}
