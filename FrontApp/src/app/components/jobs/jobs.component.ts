import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { LoadJOBSService } from 'src/app/store/jobs/jobs.actions';
import { getJobs } from 'src/app/store/jobs/jobs.selector';
import { IState } from 'src/app/store/store';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Array<any>;
  _jobsSubscription: Subscription;
  lat = 51.678418;
  lng = 7.809007;
  coords = [];
  selectedCoord: any = {};

  constructor(private _store: Store<IState>, private cookieService: CookieService, private router: Router) {
    this._jobsSubscription = this._store.pipe(select(getJobs)).subscribe((result: any) => {
      if (result && result.data) {
        this.jobs = result.data;
        this.jobs.forEach(j => {
          this.coords.push({ latitude: j.latitude, longitude: j.longitude });
        });
        console.log(this.coords);
      } else {
        this._store.dispatch(new LoadJOBSService());
      }
    });
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._jobsSubscription?.unsubscribe();
  }

  getIconUrl(coord) {
    if (this.selectedCoord && coord.latitude == this.selectedCoord.latitude && coord.longitude == this.selectedCoord.longitude) {
      return 'assets/marker-ok.png';
    }
    return 'assets/location_disabled.png';
  }

  selectCoord(job) {
    this.lat = job.latitude;
    this.lng = job.longitude;
    this.selectedCoord = { latitude: job.latitude, longitude: job.longitude };
    window.scroll(0, 0);
  }

  onMarkerClick(e) {
    this.lat = e.latitude;
    this.lng = e.longitude;
    this.selectedCoord = { latitude: e.latitude, longitude: e.longitude };
    window.scroll(0, 500);
  }

  getColor(job) {
    if (this.selectedCoord && job.latitude == this.selectedCoord.latitude && job.longitude == this.selectedCoord.longitude) {
      return '#00800030';
    }
  }

}
