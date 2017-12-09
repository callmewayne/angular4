import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private Slides:Array<Slide>
  constructor() { }

  ngOnInit() {
    this.Slides = [
      new Slide(1),
      new Slide(2),
      new Slide(3),
    ]
  }

}
export class Slide{
  constructor(
    public id:number,
   
  ){

  }
}