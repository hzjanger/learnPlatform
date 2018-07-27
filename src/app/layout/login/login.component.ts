import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  info: any = {
    loginUserName: '',
    loginPassword: '',
    registerName: '',
    registerPassword: '',
    registerRePassword: ''
  };


  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.info.loginPassword = this.data.loginUserName;
    this.info.loginUserName = this.data.loginPassword;
    this.info.registerName = this.data.registerName;
    this.info.registerPassword = this.data.registerPassword;
    this.info.registerRePassword = this.data.registerRePassword;
  }

  onSubmit() {
    this.closeDialog();

  }

  closeDialog(): void {
    this.dialogRef.close(this.info);
  }


}
