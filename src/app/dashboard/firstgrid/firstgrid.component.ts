import { Component, ElementRef, OnInit, AfterViewInit, ViewChild,  } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-firstgrid',
  template: `
    <nz-card class="h-full light-shadow light-card"
      [nzBordered]="false"
      [nzBodyStyle]="{padding: '0 15px', height: 'calc(100% - 39px)'}"
      nzTitle="重点纳税行业">
      <div class="h-full" #wrapper>
        <nz-table
          #basicTable nzSize="middle"
          [nzShowPagination]="false"
          [nzData]="dataSet"
          [nzScroll]="tableScroll">
          <thead>
            <tr>
              <th>序号</th>
              <th>行业名称</th>
              <th>税收总额</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let data of basicTable.data">
              <td>{{data.id}}</td>
              <td>{{data.title}}</td>
              <td>{{data.total}}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </nz-card>
  `,
  styles: [
    `
    `
  ]
})
export class FirstgridComponent implements OnInit {
  @ViewChild('wrapper') wrapper;
  dataSet: any[] = new Array(10).fill({
    id: 1,
    title: '医药制造业',
    total: '24.98'
  }).map((item, index) => {
    return {
      ...item,
      id: index,
    }
  });
  tableScroll: Object = {
    y: '120px'
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    let wrapperDOM = this.wrapper.nativeElement
    const [ width, height ] = [wrapperDOM.offsetWidth, wrapperDOM.offsetHeight ];
    console.log( height )
    this.tableScroll = {
      y: `${height - 40}px`
    }
  }

}
