import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  account_operation: any[] = [
    {operation: '账号绑定', link: '/study/personal'},
    {operation: '个人信息', link: 'setprofile'},
    {operation: '操作记录', link: 'oplog'},
    {operation: '实名认证', link: 'authenticate'},
    {operation: '学籍认证', link: 'certificate'},
    {operation: '收件地址', link: 'address'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
