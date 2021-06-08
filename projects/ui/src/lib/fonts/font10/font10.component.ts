import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font10',
  templateUrl: './font10.component.html',
  styleUrls: ['./font10.component.scss']
})
export class Font10Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
