import { Component } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Listings';
  ngOnInit(){
    initialize();
  };
}

function initialize() {
  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(40.7707163, -73.9686116);
  var mapOptions = {
    zoom: 14,
    center: latlng
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
};