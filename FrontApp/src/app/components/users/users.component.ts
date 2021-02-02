import { Component, OnInit } from '@angular/core';
import { ProfileMeService } from 'src/app/services/me.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;
  profile;
  permissionsArr = [];
  addUserModel:any = {};
  roles;
  constructor(private _profileService: ProfileMeService) { }

  async ngOnInit() {
    this.users = await this._profileService.getUsers().toPromise();
    this.profile = await this._profileService.getProfileMe().toPromise();
    this.roles = await this._profileService.getRoles().toPromise();
    var permissions = sessionStorage.getItem("permissions");
    if (permissions) {
      this.permissionsArr = permissions.split(",");
    }
  }

  hasPermission(permission) {
    var perr = this.permissionsArr.find(e => e == permission);
    return !!perr;
  }

  async saveUser() {
    console.log(this.addUserModel);
    this.addUserModel.id = 0;
    this.addUserModel.role = parseInt(this.addUserModel.role);
    await this._profileService.saveUser(this.addUserModel).toPromise();
    this.users = await this._profileService.getUsers().toPromise();
  }

  async deleteUser(id){
    await this._profileService.deleteUser(id).toPromise();
    this.users = await this._profileService.getUsers().toPromise();
  }

}
