import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barcharts',
  //templateUrl: './barcharts.component.html',
  template: `
    <div class="h-full " #wrapper>
      <div echarts [initOpts]="initOpts" [options]="options" class="demo-chart"></div>
    </div>`,
  styleUrls: ['./barcharts.component.less']
})
export class BarchartsComponent implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;
  initOpts: any;
  options: any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit():void {
    let wrapperDOM = this.wrapper.nativeElement
    const [ width, height ] = [wrapperDOM.offsetWidth, wrapperDOM.offsetHeight ];
    setTimeout(function():void {
      this.initCharts({width, height})
    }.bind(this))

  }

  initCharts({width, height}):void {
    this.initOpts = {
      width,
      height
    }
    this.options = {
      color: ['#2ee6fe', '#ff892d'],
      title: {
        text: '土地使用情况'
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
