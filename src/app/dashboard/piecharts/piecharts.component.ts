import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-piecharts',
  template: `
    <div class="h-full " #wrapper>
      <div echarts [initOpts]="initOpts" [options]="options" class="demo-chart"></div>
  </div>`,
  styles: []
})
export class PiechartsComponent implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;
  initOpts: any;
  options: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let wrapperDOM = this.wrapper.nativeElement
    const [ width, height ] = [wrapperDOM.offsetWidth, wrapperDOM.offsetHeight ];
    setTimeout(function() {
      this.initCharts({width, height})
    }.bind(this))
  }

  initCharts({width, height}):void {
    this.initOpts = {
      width,
      height,
    }
    this.options = {
      color: ['#2ee6fe', '#ff892d'],
      title: {
        text: '园区总量情况'
      },
      legend: {
        right: 10,
        data: ['工业', '商业']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      graphic: [
        {
          type: 'text',
          z: 100,
          left: '16%',
          bottom: '16%',
          style: {
            x: -10,
            textAlign: 'center',
            text: '企业数'
          }
        },
        {
          type: 'text',
          z: 100,
          left: '45%',
          bottom: '16%',
          style: {
            x: -10,
            textAlign: 'center',
            text: '税收总额'
          }
        },
        {
          type: 'text',
          z: 100,
          left: '70%',
          bottom: '16%',
          style: {
            x: -10,
            textAlign: 'center',
            text: '固定资产投资'
          }
        }
      ],
      series: [
        {
          name: '企业数',
          type: 'pie',
          radius: ['25%', '40%'],
          center: ['20%', '50%'],
          label: {
            show: false,
            position: 'center'
          },
          data: [
            {name: '工业', value: 1324},
            {name: '商业', value: 987}
          ],
          tooltip: {
            position: ['50%', '100%'],
            formatter: '{b0}'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '22',
              fontWeight: 'bold'
            }
          }
        },
        {
          name: '税收总额',
          type: 'pie',
          radius: ['25%', '40%'],
          center: ['50%', '50%'],
          label: {
            show: false
          },
          data: [
            {name: '工业', value: 1324},
            {name: '商业', value: 987}
          ]
        },
        {
          name: '固定资产投资',
          type: 'pie',
          radius: ['25%', '40%'],
          center: ['80%', '50%'],
          label: {
            show: false
          },
          data: [
            {name: '工业', value: 1324},
            {name: '商业', value: 987}
          ]
        }
      ]
    };
  }

}
