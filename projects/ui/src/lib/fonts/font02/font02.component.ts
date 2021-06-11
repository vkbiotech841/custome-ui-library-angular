import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'font02',
  templateUrl: './font02.component.html',
  styleUrls: ['./font02.component.scss']
})
export class Font02Component implements OnInit {

  @Input() public color: string;
  @Input() public class: string;
  @Output() public onClick: EventEmitter<void>;

  constructor() {
    this.onClick = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  public textClick(): void {
    this.onClick.emit();
    console.log("text clicked");
  }

}
