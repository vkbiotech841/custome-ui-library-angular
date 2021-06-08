import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font11',
  templateUrl: './font11.component.html',
  styleUrls: ['./font11.component.scss']
})
export class Font11Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
