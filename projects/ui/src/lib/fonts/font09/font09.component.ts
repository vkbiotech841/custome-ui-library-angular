import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font09',
  templateUrl: './font09.component.html',
  styleUrls: ['./font09.component.scss']
})
export class Font09Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
