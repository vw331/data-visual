import { Component, OnInit } from '@angular/core';


interface Company {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {

  constructor() { }

  dataSet: Company[] = new Array(4).fill({
    id: 1,
    title: '医药制造业',
    total: '24.98'
  }).map((item, index) => {
    return {
      ...item,
      id: index,
    }
  });

  ngOnInit(): void {
  }

}
