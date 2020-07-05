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

  currentTime:String;

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
    this.setCurrentTime()
  }

  setCurrentTime(): void {
    setInterval(function(){
      const d = new Date()
      this.currentTime = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 ${d.toTimeString().substring(0, 8)}`
    }.bind(this), 1000)
  }

}
