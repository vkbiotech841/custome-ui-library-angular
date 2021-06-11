import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'font11',
  templateUrl: './font11.component.html',
  styleUrls: ['./font11.component.scss']
})
export class Font11Component implements OnInit {

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
