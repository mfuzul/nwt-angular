import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() titleFirstPart: string;
  @Input() titleSecondPart: string;

  constructor() { }

  ngOnInit() {
  }

}
