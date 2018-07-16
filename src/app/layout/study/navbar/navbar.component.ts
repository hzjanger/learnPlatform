import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  value = 'Clear me';
  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    console.log(123)
  }

}
