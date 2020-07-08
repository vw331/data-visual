import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { Observable, forkJoin } from 'rxjs';
import { L } from '../../global';

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
  map: any;
  radioValue: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.initMap()
  }

  ngAfterViewInit():void {
    let wrapperDOM = this.wrapper.nativeElement
    console.log( wrapperDOM )
    this.initMap(wrapperDOM)
  }

  log(value: object[]): void {
    console.log(value);
  }


  initMap(dom: HTMLDivElement) {
    
    //this.map = L.map(dom)
    this.map = L.map(dom, {
      zoomControl: false,
    })
    .setView([32.120, 119.928], 13)
    
    L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue',{maxZoom:18,minZoom:5}).addTo(this.map);

    const arr = [
      this.http.get('./assets/geo/black.geojson'),
      this.http.get('./assets/geo/red.geojson'),
      this.http.get('./assets/geo/green.geojson')
    ]

    forkJoin(arr) 
      .subscribe(res => {
        
        res.forEach((item, index) => {
          L.geoJSON(item, {
            style: {
              'color': ['black', 'red', 'green'][index]
            }
          }).addTo(this.map)
        })
       
      })
  }
}
