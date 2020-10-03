import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private locality: any;

  constructor() {
  }

  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  calcCrow(lat1, lon1, lat2, lon2) {
    let R = 6371; // km
    let dLat = this.toRad(lat2 - lat1);
    let dLon = this.toRad(lon2 - lon1);
    lat1 = this.toRad(lat1);
    lat2 = this.toRad(lat2);

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;
  }

  // Converts numeric degrees to radians
  toRad(value) {
    return value * Math.PI / 180;
  }

  /**
   * Convert geocoder address to place object
   * @param address: Geocoder address result
   * @returns {{location: {lat: any, lng: any}, vicinity: string}}
   */
  formatAddress(address) {
    console.log(address);
    let components = address.address_components;
    let vicinity = address.formatted_address;
    // let vicinity = components[0].short_name + ', ' + components[1].short_name;

    return {
      location: {
        lat: address.geometry.location.lat(),
        lng: address.geometry.location.lng()
      },
      vicinity: vicinity
    }
  }

  // set locality from geocoder result
  // @param results: Geocoder array results
  setLocalityFromGeocoder(results) {
    let component;
    let address;

    for (let i = 0; i < results.length; i++) {
      address = results[i];
      for (let j = 0; j < address.address_components.length; j++) {
        component = address.address_components[j];

        // if (component.types[0] == 'administrative_area_level_2') {
        if (component.types[0] == 'locality') {
          // escape firebase characters
          let locality = component.short_name.replace(/[\%\.\#\$\/\[\]]/, '_');
          this.setLocality(locality);

          return locality;
        }
      }
    }

    return false;
  }

  setLocality(locality) {
    return this.locality = locality;
  }

  getLocality() {
    return this.locality;
  }


}
