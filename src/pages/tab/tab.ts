import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import { AccountPage } from '../account/account';


@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  homePage = HomePage;
  eventPage = EventPage;
  accountPage = AccountPage;

}
