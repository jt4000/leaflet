import { Injectable, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {
  map: L.Map;
  private attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

  initializeMap = (el: ElementRef, lat: number, long: number = -0.09, zoom: number = 13, maxZoom: number = 18) => {
    this.map = L.map(el.nativeElement).setView([lat, long], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: this.attribution
    }).addTo(this.map);

    let leafIcon = L.Icon.extend({
      options: {
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      }
    });

    const greenIcon = new leafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png' });
    const redIcon = new leafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png' });
    const orangeIcon = new leafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png' });

    L.marker([51.5, -0.09], { icon: greenIcon }).bindPopup('I am a green leaf.').addTo(this.map);
    L.marker([51.495, -0.083], { icon: redIcon }).bindPopup('I am a red leaf.').addTo(this.map);
    L.marker([51.49, -0.1], { icon: orangeIcon }).bindPopup('I am an orange leaf.').addTo(this.map);
  }
}
