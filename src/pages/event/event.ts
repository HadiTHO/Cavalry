import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetail } from '../../models/event-detail/event-detail.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  eventDetail = {} as EventDetail;

  eventDetailRef$: AngularFireList<EventDetail>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.eventDetailRef$ = this.database.list('event-list');
  }

  addEvent( eventDetail: EventDetail) {

    this.eventDetailRef$.push({
      eventName: this.eventDetail.eventName,
      eventDesc: this.eventDetail.eventDesc,
      lat: Number(this.eventDetail.lat),
      lgt: Number(this.eventDetail.lgt)
    });

    this.eventDetail = {} as EventDetail;

    this.navCtrl.push('HomePage'); 

  }

}
