import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-picture-model',
  templateUrl: './picture-model.component.html',
  styleUrls: ['./picture-model.component.scss'],
  animations: [
    trigger('fonduPhoto', [
      state('start', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', [
        animate('1s')
      ]),   
      transition('end => start', [
        animate('0.4s')
      ]),   
    ])
  ],
})
export class PictureModelComponent implements OnInit {

  @Input()
  photos: string[];
  index: number = 0;
  animate:string;
  constructor() { }

  ngOnInit(): void {
    if (this.photos && this.photos.length > 1)
    {
      this.animate="start";
      this.index= this.photos.length-1;
      setInterval(() => this.changePhoto(), 3000)
    }
    else
      this.animate="start";
  }

  changePhoto() {
    this.animate="start";
  }
  animatePhoto()
  {    
    this.index++;
    if (this.index >= this.photos.length) {
      this.index = 0;
    }
    this.animate="end";
  }
  onAnimationEvent( event: AnimationEvent ) {
      if (event.toState == "start")
      {
        this.animatePhoto(); 
      }
  }

}
