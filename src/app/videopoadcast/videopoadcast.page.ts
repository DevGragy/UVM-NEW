import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videopoadcast',
  templateUrl: './videopoadcast.page.html',
  styleUrls: ['./videopoadcast.page.scss'],
})
export class VideopoadcastPage implements OnInit {
  
  ImagenesSlider:  any = [];

  constructor() {
    
    this.ImagenesSlider = [
      {'image': '../../assets/slider/image1.jpg'},
      {'image': '../../assets/slider/image2.jpg'},
      {'image': '../../assets/slider/image3.jpg'}
    ] 

  }

  
 

  ngOnInit() {
  }

}
