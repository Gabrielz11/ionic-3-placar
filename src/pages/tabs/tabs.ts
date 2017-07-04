import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from "../feed/feed";
import { JogadoresPage } from "../jogadores/jogadores";
import { ConfrontosPage } from "../confrontos/confrontos";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConfrontosPage;
  tab3Root = JogadoresPage;
  tab4Root = FeedPage;
  constructor() {

  }
}
