import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PeriodicElement} from '../../../../entity/PeriodicElement';
import {operateRecord} from '../../../../entity/operateRecord';

@Component({
  selector: 'app-personal-operate-record',
  templateUrl: './personal-operate-record.component.html',
  styleUrls: ['./personal-operate-record.component.scss']
})
export class PersonalOperateRecordComponent implements OnInit {

  colums: string[] = ['type', 'time', 'ip', 'device'];
  element_data: operateRecord[] = [
    {type: '账号登录', time: '2018.07.17 16:56', ip: '218.76.65.99', device: 'web1'},
    {type: '账号登录', time: '2018.06.17 16:56', ip: '218.76.65.99', device: 'web2'},
    {type: '账号登录', time: '2018.04.17 16:56', ip: '218.76.65.99', device: 'web3'},
    {type: '账号登录', time: '2018.05.17 16:56', ip: '218.76.65.99', device: 'web4'},
    {type: '账号登录', time: '2018.06.17 16:56', ip: '218.76.65.99', device: 'web5'},
    {type: '账号登录', time: '2018.7.17 16:56', ip: '218.76.65.99', device: 'web6'},
    {type: '账号登录', time: '2018.27.17 16:56', ip: '218.76.65.99', device: 'web7'},
    {type: '账号登录', time: '2018.07.17 16:56', ip: '218.76.65.99', device: 'web8'},
    {type: '账号登录', time: '2018.047.17 16:56', ip: '218.76.65.99', device: 'web9'},
    {type: '账号登录', time: '2018.075.17 16:56', ip: '218.76.65.99', device: 'web0'},
    {type: '账号登录', time: '2018.076.17 16:56', ip: '218.76.65.99', device: 'web11'},
    {type: '账号登录', time: '2018.077.17 16:56', ip: '218.76.65.99', device: 'web12'},
    {type: '账号登录', time: '2018.078.17 16:56', ip: '218.76.65.99', device: 'web23'},
    {type: '账号登录', time: '2018.079.17 16:56', ip: '218.76.65.99', device: 'web33'},
    {type: '账号登录', time: '2018.070.17 16:56', ip: '218.76.65.99', device: 'web2'},
    {type: '账号登录', time: '2018.073.17 16:56', ip: '218.76.65.99', device: 'web2'},
    {type: '账号登录', time: '2018.072.17 16:56', ip: '218.76.65.99', device: 'web1'},
    {type: '账号登录', time: '2018.071.17 16:56', ip: '218.76.65.99', device: 'web1'},
    {type: '账号登录', time: '2018.073.17 16:56', ip: '218.76.65.99', device: 'web1'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];


  dataSource = new MatTableDataSource<operateRecord>(this.element_data);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}




