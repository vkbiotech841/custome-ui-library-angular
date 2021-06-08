import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font02',
  templateUrl: './font02.component.html',
  styleUrls: ['./font02.component.scss']
})
export class Font02Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
