import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  imgs: string[] = [
    '1', '2', '3', '4', '5', '6'
  ];
  constructor() { }

  ngOnInit() {
  }


}
