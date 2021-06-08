import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font05',
  templateUrl: './font05.component.html',
  styleUrls: ['./font05.component.scss']
})
export class Font05Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
