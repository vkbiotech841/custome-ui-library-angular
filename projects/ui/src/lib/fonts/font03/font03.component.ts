import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font03',
  templateUrl: './font03.component.html',
  styleUrls: ['./font03.component.scss']
})
export class Font03Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
