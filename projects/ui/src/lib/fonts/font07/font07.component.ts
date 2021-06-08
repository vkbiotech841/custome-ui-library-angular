import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font07',
  templateUrl: './font07.component.html',
  styleUrls: ['./font07.component.scss']
})
export class Font07Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
