import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google;
@Component({
  selector: 'app-simple',
  templateUrl: './simple.page.html',
  styleUrls: ['./simple.page.scss'],
})
export class SimplePage implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

}
