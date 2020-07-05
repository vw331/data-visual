import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.component.html',
  styleUrls: ['./mainmap.component.less']
})

@Injectable()
export class MainmapComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  checkOptionsOne = [
    { label: '商业用地', value: '商业用地', checked: true },
    { label: '工业用地', value: '工业用地' },
    { label: '发展备用地', value: '发展备用地' },
    { label: '道路图层', value: '道路图层' },
    { label: '企业图层', value: '企业图层' }
  ];
  radioOpts = [
    { label: '阿里巴巴', value: '1' },
    { label: '腾讯控股', value: '2' },
    { label: '百度科技', value: '3' },
    { label: '字节跳动', value: '4' },
    { label: '网易游戏', value: '5' },
    { label: '美团生活', value: '6' }
  ];
  options: any;
  radioValue: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initMap()
  }

  ngAfterViewInit():void {
  }

  log(value: object[]): void {
    console.log(value);
  }


  initMap() {
    var mapDate = [
      {
        name: '江干区',
        value: [120.185, 30.274,29999]
      },
      {
        name: '拱墅区',
        value: [120.182, 30.351,29999]
      },
      {
        name: '西湖区',
        value: [120.091, 30.27,29999]
      },
      {
        name: '滨江区',
        value: [120.21, 30.209,29999]
      },
      {
        name: '萧山区',
        value: [120.254, 30.159,29999]
      },
      {
        name: '余杭区',
        value: [120.295, 30.427,29999]
      },
      {
        name: '富阳区',
        value: [119.956, 30.05,29999]
      },
      {
        name: '桐庐县',
        value: [119.675, 29.784,29999]
      },
      {
        name: '淳安县',
        value: [119.058, 29.613,29999]
      },
      {
        name: '建德市',
        value: [119.28, 29.464,29999]
      },
      {
        name: '临安区',
        value: [119.712, 30.227,29999]
      },
      {
        name: '钱塘新区',
        value: [120.485, 30.284,29999]
      }
    ];
    this.http.get('./assets/geo/HZ.json', { observe: 'body'})
      .subscribe(data => {
        console.log(data)
        echarts.registerMap('HZ', data)
        this.options = {
          tooltip: {
            trigger: 'item'
          },
          geo: {
            map: 'HZ',
            aspectScale: 0.75, //长宽比
            zoom: 1.1,
            roam: false,
            itemStyle: {
              normal: {
                areaColor: '#0e3f89',
                shadowColor: '#182f68',
                shadowOffsetX: 0,
                shadowOffsetY: 15
              },
              emphasis: {
                areaColor: '#2AB8FF',
                borderWidth: 0,
                color: 'green',
                label: {
                  show: false
                }
              }
            }
          },
          series: [
            {
              name: '杭州',
              type: 'map',
              mapType: 'HZ', // 自定义扩展图表类型
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                },
                emphasis: {
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#023867',
                  borderWidth: 1.5,
                  areaColor: '#1d7dd4'
                },
                emphasis: {
                  areaColor: '#2586ff',
                  borderWidth: 0,
                  color: 'green'
                }
              },
              zoom: 1.1
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              showEffectOn: 'render',
              symbol: 'image://assets/tips.png',
              symbolSize: [16, 24],
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  shadowBlur: 2,
                  shadowColor: 'rgba(0,0,0,.2)'
                }
              },
              // emphasis: {
              //   label: {
              //     show: true,
              //     width: 200,
              //     height: 200,
              //     backgroundColor: '#0b4e7b',
              //     formatter: function(a){
              //       console.log(a)
              //       return '<div>123</div>'
              //     }
              //   }
              // },
              tooltip: {
                formatter: function(n) {
                  return `
                    <div class="map-tooltip">
                      <h4>浙江省阿里巴巴科技有限公司</h4>
                      <p>占地面积：25亩</p>
                      <p>纳税总额（2020-2011）：1257.21万元</p> 
                      <p>利润总额（2020-2011）：1257.21万元</p> 
                    </div>
                  `
                },
                backgroundColor: 'transparent'
              },
              data: mapDate
            }
          ]
        }
      })
  }
}
