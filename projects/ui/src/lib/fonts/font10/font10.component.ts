import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'font10',
  templateUrl: './font10.component.html',
  styleUrls: ['./font10.component.scss']
})
export class Font10Component implements OnInit {

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
