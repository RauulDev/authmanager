import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  addUserModel: any = {};
  editUserModel: any = {};
  roles;
  closeResult = '';
  showSaveButton: boolean;
  showSuccessSave:boolean;

  constructor(private _profileService: ProfileMeService, private modalService: NgbModal) { }

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
    this.addUserModel.id = 0;
    this.addUserModel.role = parseInt(this.addUserModel.role);
    await this._profileService.saveUser(this.addUserModel).toPromise();
    this.users = await this._profileService.getUsers().toPromise();
    this.showSuccessSave = true;
  }

  async deleteUser(id) {
    await this._profileService.deleteUser(id).toPromise();
    this.users = await this._profileService.getUsers().toPromise();
  }

  async openEditModal(content, idUser, showSaveButton = true) {
    this.showSaveButton = showSaveButton;
    let user = await this._profileService.getUser(idUser).toPromise();
    this.editUserModel = user;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  async editUser() {
    await this._profileService.editUser(this.editUserModel).toPromise();
    this.users = await this._profileService.getUsers().toPromise();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
