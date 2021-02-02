import { Component, OnInit } from '@angular/core';
import { ProfileMeService } from 'src/app/services/me.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile;
  constructor(private _profileMeService: ProfileMeService) { }

  async ngOnInit() {
    this.profile = await this._profileMeService.getProfileMe().toPromise();
  }

}
