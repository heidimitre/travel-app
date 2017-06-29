import { Component } from '@angular/core';

import { DestinationPage } from '../destination/destination';
import { TripsPage } from '../trips/trips';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DestinationPage;
  tab3Root = TripsPage;

  constructor() {

  }
}
