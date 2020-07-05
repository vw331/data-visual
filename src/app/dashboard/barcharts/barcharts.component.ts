import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barcharts',
  //templateUrl: './barcharts.component.html',
  template: `
    <nz-card class="h-full light-shadow light-card"
      [nzBordered]="false"
      [nzBodyStyle]="{height: '100%'}">
        <div echarts style="height: 100%" theme="dark" [options]="options" class="demo-chart"></div>
    </nz-card>`,
  styles: []
})
export class BarchartsComponent implements OnInit {


  options: any;
  constructor() { }

  ngOnInit(): void {
    this.initCharts()
  }


  initCharts():void {
    this.options = {
      backgroundColor: 'transparent',
      color: ['#2ee6fe', '#ff892d'],
      title: {
        text: '土地使用情况',
        textStyle: {
          color: '#00ffdd',
          fontSize: 15
        }
      },
      legend: {
        right: 10,
        data: ['已用面积', '可规划面积']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        //top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['商业用地', '工业用地', '发展备用地'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '已用面积',
          type: 'bar',
          barWidth: 20,
          stack: '总量',
          data: [10, 52, 200],
        },{
          name: '可规划面积',
          type: 'bar',
          barWidth: 20,
          stack: '总量',
          data: [324, 87, 23]
        }
      ],
    };
  }
}
