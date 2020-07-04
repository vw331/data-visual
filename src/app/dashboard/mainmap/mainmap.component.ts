import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.less']
})
export class MainmapComponent implements OnInit {
  checkOptionsOne = [
    { label: '商业用地', value: '商业用地', checked: true },
    { label: '工业用地', value: '工业用地' },
    { label: '发展备用地', value: '发展备用地' },
    { label: '道路图层', value: '道路图层' },
    { label: '企业图层', value: '企业图层' }
  ];
  radioOpts = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  radioValue: any;
  constructor() { }

  ngOnInit(): void {
  }

  log(value: object[]): void {
    console.log(value);
  }
}
