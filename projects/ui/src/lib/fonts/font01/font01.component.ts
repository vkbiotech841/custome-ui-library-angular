import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font01',
  templateUrl: './font01.component.html',
  styleUrls: ['./font01.component.scss']
})
export class Font01Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
