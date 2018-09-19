import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { EventDetail } from '../../models/event-detail/event-detail.interface';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];

  newEventListRef$ : AngularFireList<EventDetail>;
  newEventList$: Observable<EventDetail[]>;
 
  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {
    this.tabs=["New", "Upcoming"];
    this.database.list<EventDetail>('event-list').valueChanges().subscribe((eventData) => { 
      console.log("eventDetails data", eventData);
    }, (err)=>{
   console.log("Error while retrieving eventDetails : ", err);
    }); 
    this.newEventListRef$ = this.database.list<EventDetail>('event-list');
    this.newEventList$ = this.newEventListRef$.valueChanges();
  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

  loadEvents(infinteScroll?) {
    if (infinteScroll) {
      infinteScroll.complete();
    }
  }

  load(infiniteScroll) {
    this.loadEvents(infiniteScroll);
  }

  toMap() {
    this.navCtrl.push('MarkermapPage');
  }

  toNearby() {
    this.navCtrl.push('NearbyPage');
  }

  toList(){
    this.navCtrl.push('MapPage');
  }
}
