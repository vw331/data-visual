import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-piecharts',
  template: `
    <nz-card class="h-full light-shadow light-card  some-fancy "
      [nzBordered]="false"
      [nzBodyStyle]="{height: '100%'}">
        <div echarts style="height: 100%" theme="dark" [options]="options" class="demo-chart"></div>
    </nz-card>`,
  styles: []
})
export class PiechartsComponent implements OnInit {

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
        text: '园区总量情况',
        textStyle: {
          color: '#00ffdd',
          fontSize: 15
        }
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
            text: '企业数',
            color: '#ffffff',
            fill: '#ffffff'
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
            text: '税收总额',
            fill: '#ffffff'
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
            text: '固定资产投资',
            fill: '#ffffff'
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
