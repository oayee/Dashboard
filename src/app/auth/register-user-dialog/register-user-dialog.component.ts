import {MatDialogRef} from '@angular/material';
import {Component} from '@angular/core';
import {Roles} from '../../core/user-service/User';

@Component({
  selector: 'register-user-dialog',
  templateUrl: './register-user-dialog.component.html',
})
export class RegisterUserDialogComponent {
  public name: string;
  public nickname: string;
  public surname: string;
  public lastname: string;
  public password: string;
  public passwordConfirmation: string;

  public passwordConfirmed: boolean = false;

  constructor(public dialogRef: MatDialogRef<RegisterUserDialogComponent>) {}

  public checkPwd(): void {
    this.password === this.passwordConfirmation ? this.passwordConfirmed = true : this.passwordConfirmed = false;
  }

  public register(): void {
    if (!this.passwordConfirmed)
      return;
    this.dialogRef.close({
      surname: this.surname,
      name: this.name,
      lastname: this.lastname,
      role: Roles.ADMIN,
      nickname: this.nickname,
      password: this.password
    });
  }

  public close(): void {
    this.dialogRef.close();
  }
}
