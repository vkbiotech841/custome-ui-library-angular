import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font12',
  templateUrl: './font12.component.html',
  styleUrls: ['./font12.component.scss']
})
export class Font12Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
