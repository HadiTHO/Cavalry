import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage {

  constructor(public navCtrl: NavController, public locations: LocationsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPage');
  }

}