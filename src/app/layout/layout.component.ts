import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RayonService } from '../services/rayon.service';

import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  controlNavBar = [Breakpoints.TabletPortrait, Breakpoints.Handset];
  itemsMenu: any[];
  isText = true;
  isMini = false;
  isHandsetPortrait = false;
  paramsUrl: number;
  
  // isLandscape = false;

  sizeBarText: string = "200px";
  // tailleBarIcon: string = "72px"
  sizeBar: string = this.sizeBarText;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private rayonService: RayonService,
    private router: Router
    ) {
    breakpointObserver.observe([
      Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.isMini = this.breakpointObserver.isMatched(this.controlNavBar);
        this.isHandsetPortrait = this.breakpointObserver.isMatched(this.controlNavBar);
      }
    });
  }

  ngOnInit() {
    this.itemsMenu = this.rayonService.itemsMenu;

    this.router.events
    .subscribe(
      (event) => {
        if(event instanceof NavigationStart) {
        this.paramsUrl = event.url.split('/').length;
        }
      });
  }

  redirectToMainLayout() {
    this.router.navigate(['/zone']);
  }

  getTitreFull(): string {
    return "Zone";
  }

  getTitreLine1(): string {
    return "Zone";
  }

  getTitreLine2(): string {
    return "";
  }

}
