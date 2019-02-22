import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cui-snake',
  template: `
    <iframe src="https://pearpages.com/games/snake/" width="600px" height="600px" frameborder="0"></iframe>
  `
})
export class CuiSnakeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
