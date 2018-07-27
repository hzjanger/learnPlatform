import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginUserName: string = '';
  loginPassword: string = '';
  registerName: string = '';
  registerPassword: string = '';
  registerRePassword: string = '';

  value = 'Clear me';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * 点击搜索按钮
   */
  onSearch() {
    console.log(123)
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '35%',
      data: {
        loginUserName: this.loginUserName,
        loginPassword: this.loginPassword,
        registerName: this.registerName,
        registerPassword: this.registerPassword,
        registerRePassword: this.registerRePassword
      }
    });
    dialogRef.afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        this.loginUserName = data.loginUserName;
        console.log(this.loginUserName);
      })
  }


}
