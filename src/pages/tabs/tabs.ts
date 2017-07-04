import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from "../feed/feed";
import { JogadoresPage } from "../jogadores/jogadores";
//import { IntroPage } from "../intro/intro";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = JogadoresPage;
  //tab4Root = IntroPage;

  constructor() {

  }
}
