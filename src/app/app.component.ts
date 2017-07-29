import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
declare var google: any;
var map;
/*
declare var geocoder: any;
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Listings';
  listings = null;
  geocoder = null;
  map = null; // map

  constructor(private _apiService: ApiService) { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.initialize();
    this.search();
    for (var listing = 0; listing < this.listings.length; listing++) {
      this.addMarker(listing,
        this.listings[listing].Property.Address.StreetNumber + ' ' +
        this.listings[listing].Property.Address.StreetName + ' ' +
        this.listings[listing].Property.Address.City);
    }
  };

  initialize() {
    console.log("initialize");
    this.geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(40.7707163, -73.9686116);
    var mapOptions = {
      zoom: 14,
      center: latlng
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions); //map
  };


  addMarker(index, address) {
    console.log("addMarker");
    this.geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == 'OK') {
        // var map = document.getElementById('map');
        // var map= Ext.getCmp('mapCanvas').getMap(); // add getMap() here to get the map instance
        console.dir("map",map); // map
        var marker= new google.maps.Marker({
          position: results[0].geometry.location,
          title: address,
        });
        marker.setMap(map); // map
        /*
        var marker = new google.maps.Marker({
          map: this.map,
          position: results[0].geometry.location,
          title: address,
          setMap : this.map
        });
        */
        marker.addListener('click', function () {
          var items = document.querySelector('ul').getElementsByTagName("li");
          for (var i = 0; i < items.length; ++i) {
            var li = items[i];
            if (index == i) {
              li.classList.add("yellow");
            } else {
              li.classList.remove("yellow");
            }
          }
        });
      }
    });
  };

  search() {
    var vObject = this._apiService.search()
    if (vObject) {
      for (var listing = 0; listing < vObject.length; listing++) {
        for (var i = vObject[listing].Listing.OpenHouses.length - 1; i > 0; i--) {
          var ohN = vObject[listing].Listing.OpenHouses[i];
          var ohNMinus1 = vObject[listing].Listing.OpenHouses[i - 1];
          var dateN = this.formatDate(ohN.Date);
          var dateNMinus1 = this.formatDate(ohNMinus1.Date);
          if (dateN.getTime() > Date.now()) {
            if (dateN < dateNMinus1) {
              vObject[listing].Listing.OpenHouses[i - 1] = vObject[listing].Listing.OpenHouses[i];
            }
          }
        }
        vObject[listing].Listing.OpenHouses.length = 1;
      }
      this.listings = vObject;
    }
  }

  public formatDate(date) {
    var datearray = date.split("/");
    var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
    var dateOut = new Date(newdate);
    return dateOut;
  };
  public formatTime(date, time) {
    var datearray = date.split("/");
    var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2] + ' ' + time;
    var dateOut = new Date(newdate);
    return dateOut;
  };
  public suffix(date) {
    var datearray = date.split("/");
    if (parseInt(datearray[0]) == 1) {
      return "st";
    }
    if (parseInt(datearray[0]) == 2) {
      return "nd";
    }
    if (parseInt(datearray[0]) == 3) {
      return "rd";
    }
    return "th";
  };
}