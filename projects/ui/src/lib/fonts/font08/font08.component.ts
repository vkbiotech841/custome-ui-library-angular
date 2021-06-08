import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'font08',
  templateUrl: './font08.component.html',
  styleUrls: ['./font08.component.scss']
})
export class Font08Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;

  constructor() { }

  ngOnInit(): void {
  }

}
