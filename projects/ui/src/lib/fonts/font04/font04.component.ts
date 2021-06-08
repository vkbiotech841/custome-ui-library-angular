import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font04',
  templateUrl: './font04.component.html',
  styleUrls: ['./font04.component.scss']
})
export class Font04Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
