import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambientelince',
  templateUrl: './ambientelince.page.html',
  styleUrls: ['./ambientelince.page.scss'],
})
export class AmbientelincePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoDeportes(){
    this.router.navigate(['/deportes/']);
  }

  gotoAculturales(){
    this.router.navigate(['/culturales/']);
  }

  
  gotoEventos(){
    this.router.navigate(['/eventos/']);
  }

}
