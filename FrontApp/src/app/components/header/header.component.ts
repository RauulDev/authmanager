import { Component, Input, OnInit } from '@angular/core';
import { ProfileMeService } from 'src/app/services/me.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user;
  permissions;
  showUsersMenu: boolean;
  constructor(private _profileMeService: ProfileMeService) { }

  async ngOnInit() {
    this.user = await this._profileMeService.getProfileMe().toPromise();
    var permissions: any = await this._profileMeService.getPermissions().toPromise();
    var permissionsArr = [];
    permissions.forEach(element => {
      permissionsArr.push(element.name);
      if (element.family == "ManageUsers") {
        this.showUsersMenu = true;
      }
    });
    sessionStorage.setItem("permissions", permissionsArr.join());
  }

}
