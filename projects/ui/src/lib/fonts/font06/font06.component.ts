import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font06',
  templateUrl: './font06.component.html',
  styleUrls: ['./font06.component.scss']
})
export class Font06Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
