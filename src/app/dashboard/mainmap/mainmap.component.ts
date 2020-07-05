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
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
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

    this.http.get('./assets/geo/HK.json', { observe: 'body'})
      .subscribe(data => {
        console.log(data)
        echarts.registerMap('HK', data)
        this.options = {
          bmap: {
            // 百度地图中心经纬度
            center: [120.13066322374, 30.240018034923],
            // 百度地图缩放
            zoom: 14,
            // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
            roam: true,
            // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
            mapStyle: {}
          },
          series: [
            {
              name: '香港18区人口密度',
              type: 'map',
              mapType: 'HK', // 自定义扩展图表类型
              label: {
                  show: true
              },
              // 自定义名称映射
              nameMap: {
                'Central and Western': '中西区',
                'Eastern': '东区',
                'Islands': '离岛',
                'Kowloon City': '九龙城',
                'Kwai Tsing': '葵青',
                'Kwun Tong': '观塘',
                'North': '北区',
                'Sai Kung': '西贡',
                'Sha Tin': '沙田',
                'Sham Shui Po': '深水埗',
                'Southern': '南区',
                'Tai Po': '大埔',
                'Tsuen Wan': '荃湾',
                'Tuen Mun': '屯门',
                'Wan Chai': '湾仔',
                'Wong Tai Sin': '黄大仙',
                'Yau Tsim Mong': '油尖旺',
                'Yuen Long': '元朗'
              }
            }
          ]
        }
      })
  }
}
