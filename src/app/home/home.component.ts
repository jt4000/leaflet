import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LeafletService } from '../_services/leaflet.service';
import { LatLngExpression } from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('leaflet') map: ElementRef;


  constructor(
    private leaflet: LeafletService
  ) { }

  ngOnInit() {
    this.leaflet.initializeMap(this.map, 51.5);
  }

}
