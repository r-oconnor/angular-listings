import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listings = null;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.search();
  }

  search(){
    var vObject = this._apiService.search()
    if (vObject) {
      for (var listing = 0; listing < vObject.length; listing++) {
          for (var i = vObject[listing].Listing.OpenHouses.length-1; i > 0; i--) {
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
