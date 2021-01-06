import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {

    // 58.035942, 14.97178
    //   https://stackblitz.com/edit/jaime-leaflet-custom-markers?file=app%2Fapp.component.html
    // https://stackoverflow.com/questions/55211396/how-to-add-marker-to-leaflet-map-in-angular-component/55211483#55211483
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 5
    });

    const myIcon = L.icon({
      iconUrl: 'marker-icon.png',
      shadowUrl: 'marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [13, 41],
    });

    L.marker([51.5, -0.09], { icon: myIcon }).addTo(this.map)
      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    L.marker([37.98, 23.72], { icon: myIcon })
      .addTo(this.map)

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    L.marker([59.340214, 18.018026
    ], { icon: myIcon }).addTo(this.map)
      .bindPopup("<b>Hello world!</b><br />I am a popupp.").openPopup();

  }
}
